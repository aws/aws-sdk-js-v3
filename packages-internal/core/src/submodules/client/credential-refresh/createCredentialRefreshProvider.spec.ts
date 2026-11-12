import { NoOpLogger } from "@smithy/core/client";
import { CredentialsProviderError } from "@smithy/core/config";
import type { RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  NON_RECOVERABLE_ERROR_CACHE_MAX,
  NON_RECOVERABLE_ERROR_CACHE_MIN,
  REFRESH_BACKOFF_MAX,
  REFRESH_BACKOFF_MIN,
  REFRESH_BACKOFF_MIN_UPPER_BOUND,
  refreshBackoffUpperBoundMs,
} from "./constants";
import { createCredentialRefreshProvider } from "./createCredentialRefreshProvider";
import type { CredentialRefreshProviderOptions, CredentialCacheState } from "./types";

const SIX_HOURS_MS = 6 * 3600_000;
const START_MS = new Date("2024-01-01T00:00:00Z").getTime();

/**
 * Pinned value for `Math.random`, which both jittered durations draw from.
 *
 * 0.4 rather than 0 or 1 so a test cannot pass by coinciding with a range
 * boundary, and so the resulting backoff is not a round 5 or 10 minutes.
 */
const RANDOM_FRACTION = 0.4;

/**
 * Backoff the pinned random value produces for credentials with `remainingMs` left when the refresh
 * fails: 72_000ms when expired or under 3 minutes remain, 276_000ms when 20 minutes or more remain.
 */
const backoffFor = (remainingMs: number) =>
  REFRESH_BACKOFF_MIN + Math.floor(RANDOM_FRACTION * (refreshBackoffUpperBoundMs(remainingMs) - REFRESH_BACKOFF_MIN));

/** Remaining lifetime of each seeded state, matching `seed`. */
const EXPIRED_REMAINING = 0;
const MANDATORY_REMAINING = 30_000;
const ADVISORY_REMAINING = 30 * 60_000;
const VALID_REMAINING = 2 * 3600_000;

/** 2_600ms. */
const NON_RECOVERABLE_CACHE_MS =
  NON_RECOVERABLE_ERROR_CACHE_MIN +
  RANDOM_FRACTION * (NON_RECOVERABLE_ERROR_CACHE_MAX - NON_RECOVERABLE_ERROR_CACHE_MIN);

/** An error a provider has marked as requiring customer action. */
const nonRecoverableError = (message = "run `aws sso login`") =>
  Object.assign(new Error(message), { $nonRecoverable: true });

let now: number;
let akidCounter: number;

/** Clock reads since the last reset. Used to assert the static fast path. */
let clockReads: number;

/** Moves the mocked wall clock forward. */
const advance = (ms: number) => {
  now += ms;
};

beforeEach(() => {
  now = START_MS;
  akidCounter = 0;
  clockReads = 0;
  vi.spyOn(Date, "now").mockImplementation(() => {
    clockReads++;
    return now;
  });
  vi.spyOn(Math, "random").mockReturnValue(RANDOM_FRACTION);
});

afterEach(() => {
  vi.restoreAllMocks();
});

const setup = (options: CredentialRefreshProviderOptions = {}) => {
  const source = vi.fn<RuntimeConfigAwsCredentialIdentityProvider>();
  const logger = { trace: vi.fn(), debug: vi.fn(), info: vi.fn(), warn: vi.fn(), error: vi.fn() };
  const cache = createCredentialRefreshProvider(source, { logger, ...options });

  /** Credentials expiring `lifetimeMs` from the current mocked time. */
  const credentials = (lifetimeMs = SIX_HOURS_MS, accessKeyId?: string): AwsCredentialIdentity => ({
    accessKeyId: accessKeyId ?? `AKID-${++akidCounter}`,
    secretAccessKey: "SECRET",
    sessionToken: "TOKEN",
    expiration: new Date(Date.now() + lifetimeMs),
  });

  /**
   * Performs the initial fetch, then advances the clock so the cache sits in
   * `state`.
   *
   * Seeds with a 6 hour lifetime, which selects a 60 minute advisory window
   * against the 1 minute mandatory window, then positions the remaining
   * lifetime between those boundaries.
   */
  const seed = async (state: Exclude<CredentialCacheState, "none">, accessKeyId?: string) => {
    const seeded = credentials(SIX_HOURS_MS, accessKeyId);
    source.mockResolvedValueOnce(seeded);
    await cache();

    const remainingMs: Record<Exclude<CredentialCacheState, "none">, number> = {
      valid: 2 * 3600_000,
      advisory: 30 * 60_000,
      mandatory: 30_000,
      expired: -30_000,
    };
    advance(SIX_HOURS_MS - remainingMs[state]);
    source.mockClear();
    return seeded;
  };

  return { source, logger, cache, credentials, seed };
};

describe("createCredentialRefreshProvider", () => {
  it("marks the provider so a caller does not stack a second lifecycle on it", () => {
    const { cache } = setup();
    expect(cache.memoized).toBe(true);
  });

  describe("cached credential behavior", () => {
    // spec: valid-no-refresh-use-cached
    it("returns cached credentials without contacting the source when they are valid", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("valid");

      await expect(ctx.cache()).resolves.toBe(seeded);
      expect(ctx.source).not.toHaveBeenCalled();
    });

    // spec: advisory-refresh-succeeds
    it("returns refreshed credentials when an advisory refresh succeeds", async () => {
      const ctx = setup();
      await ctx.seed("advisory");
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      await expect(ctx.cache()).resolves.toBe(fresh);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    // spec: mandatory-refresh-succeeds
    it("returns refreshed credentials when a mandatory refresh succeeds", async () => {
      const ctx = setup();
      await ctx.seed("mandatory");
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      await expect(ctx.cache()).resolves.toBe(fresh);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    // spec: expired-refresh-succeeds
    it("returns refreshed credentials when an expired credential set is refreshed", async () => {
      const ctx = setup();
      await ctx.seed("expired");
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      await expect(ctx.cache()).resolves.toBe(fresh);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    it("forwards the caller's options to the source", async () => {
      const ctx = setup();
      await ctx.seed("mandatory");
      ctx.source.mockResolvedValueOnce(ctx.credentials());

      const options = { callerClientConfig: { region: async () => "us-west-2" } };
      await ctx.cache(options);

      expect(ctx.source).toHaveBeenCalledWith(options);
    });
  });

  describe("static stability on refresh failure", () => {
    // spec: advisory-refresh-fails-uses-cached
    it("keeps using cached credentials when an advisory refresh fails", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("advisory");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));

      await expect(ctx.cache()).resolves.toBe(seeded);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    // spec: mandatory-refresh-fails-uses-cached
    it("keeps using cached credentials when a mandatory refresh fails", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("mandatory");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));

      await expect(ctx.cache()).resolves.toBe(seeded);
    });

    // spec: expired-refresh-fails-uses-expired
    it("keeps using expired credentials when the refresh fails, rather than raising", async () => {
      // The central behavior of the spec. The service decides whether to accept
      // the request; the SDK does not refuse to sign locally.
      const ctx = setup();
      const seeded = await ctx.seed("expired");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));

      await expect(ctx.cache()).resolves.toBe(seeded);
    });

    it("never discards cached credentials across repeated refresh failures", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("expired");

      for (let attempt = 0; attempt < 5; attempt++) {
        ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));
        await expect(ctx.cache()).resolves.toBe(seeded);
        advance(backoffFor(EXPIRED_REMAINING) + 1_000);
      }
    });

    // spec: advisory-stale-response-uses-cached, mandatory-stale-response-uses-cached
    it.each(["advisory", "mandatory"] as const)(
      "treats an already-expired response as a failed refresh in the %s window",
      async (state) => {
        // A source can stay reachable while no longer producing fresh
        // credentials, for example IMDS serving its last response during a
        // HOSM outage. The previously cached set was at least valid when
        // issued, so it is kept.
        const ctx = setup();
        const seeded = await ctx.seed(state);
        ctx.source.mockResolvedValueOnce(ctx.credentials(0));

        await expect(ctx.cache()).resolves.toBe(seeded);
      }
    );

    it("applies the backoff after a stale response", async () => {
      const ctx = setup();
      await ctx.seed("mandatory");
      ctx.source.mockResolvedValueOnce(ctx.credentials(0));
      await ctx.cache();
      ctx.source.mockClear();

      await ctx.cache();

      expect(ctx.source).not.toHaveBeenCalled();
    });

    it("logs the failure reason and when the next attempt will happen", async () => {
      const ctx = setup();
      await ctx.seed("mandatory");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));

      await ctx.cache();

      expect(ctx.logger.warn).toHaveBeenCalledTimes(1);
      const message = ctx.logger.warn.mock.calls[0][0] as string;
      expect(message).toContain("STS unreachable");
      expect(message).toContain("continue using cached credentials");
      expect(message).toContain(`${backoffFor(MANDATORY_REMAINING) / 1000} seconds`);
    });

    it("gives a reason in the warning when the source resolves with no credentials", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("mandatory");
      ctx.source.mockResolvedValueOnce(undefined as unknown as AwsCredentialIdentity);

      await expect(ctx.cache()).resolves.toBe(seeded);

      expect(ctx.logger.warn).toHaveBeenCalledTimes(1);
      expect(ctx.logger.warn.mock.calls[0][0]).toContain(
        "Credential refresh failed: the credential source did not return credentials."
      );
    });

    // The spec requires this warning, so it must not be lost when no logger is configured.
    it.each([
      ["no logger is configured", () => undefined],
      ["the logger is a client's default NoOpLogger", () => new NoOpLogger()],
    ])("prints the warning to the console when %s", async (_label, makeLogger) => {
      const consoleWarn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
      const source = vi.fn<RuntimeConfigAwsCredentialIdentityProvider>();
      const cache = createCredentialRefreshProvider(source, { logger: makeLogger() });
      source.mockResolvedValueOnce({
        accessKeyId: "AKID",
        secretAccessKey: "SECRET",
        expiration: new Date(Date.now() + SIX_HOURS_MS),
      });
      await cache();
      advance(SIX_HOURS_MS - 30_000);
      source.mockRejectedValueOnce(new Error("STS unreachable"));

      await cache();

      expect(consoleWarn).toHaveBeenCalledTimes(1);
      expect(consoleWarn.mock.calls[0][0]).toContain("Credential refresh failed: STS unreachable");
    });

    it("does not print to the console when a logger is configured", async () => {
      const consoleWarn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
      const ctx = setup();
      await ctx.seed("mandatory");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));

      await ctx.cache();

      expect(ctx.logger.warn).toHaveBeenCalledTimes(1);
      expect(consoleWarn).not.toHaveBeenCalled();
    });
  });

  describe("initial fetch", () => {
    // spec: no-cache-initial-fetch-fails-then-succeeds
    it("raises when the initial fetch fails, then succeeds on a later call", async () => {
      const ctx = setup();
      const failure = new Error("Could not load credentials from any providers");
      ctx.source.mockRejectedValueOnce(failure);

      await expect(ctx.cache()).rejects.toBe(failure);

      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);
      await expect(ctx.cache()).resolves.toBe(fresh);
    });

    it.each([
      ["resolves with nothing", (ctx: ReturnType<typeof setup>) => ctx.source.mockResolvedValueOnce(undefined as any)],
      ["throws undefined", (ctx: ReturnType<typeof setup>) => ctx.source.mockRejectedValueOnce(undefined)],
    ])("raises a clear error when the source %s on the initial fetch", async (_label, arrange) => {
      const ctx = setup();
      arrange(ctx);

      const error = await ctx.cache().catch((e) => e);

      expect(error).toBeInstanceOf(CredentialsProviderError);
      expect(error.message).toBe("The credential source did not return credentials.");
      expect(error.tryNextLink).toBe(false);
    });

    // spec: no-cache-initial-fetch-stale-response-cached
    it("caches and returns an already-expired response on the initial fetch", async () => {
      // They are the only credentials available, and a HOSM-backed service may still accept them.
      const ctx = setup();
      const stale = ctx.credentials(0);
      ctx.source.mockResolvedValueOnce(stale);

      await expect(ctx.cache()).resolves.toBe(stale);

      // Expired, so the next call takes the mandatory path and refreshes.
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);
      await expect(ctx.cache()).resolves.toBe(fresh);
      expect(ctx.source).toHaveBeenCalledTimes(2);
    });

    it("applies the backoff when the refresh after a stale initial fetch also returns stale credentials", async () => {
      const ctx = setup();
      const stale = ctx.credentials(0);
      ctx.source.mockResolvedValueOnce(stale);
      await ctx.cache();

      ctx.source.mockResolvedValueOnce(ctx.credentials(0));
      await expect(ctx.cache()).resolves.toBe(stale);
      ctx.source.mockClear();

      await expect(ctx.cache()).resolves.toBe(stale);
      expect(ctx.source).not.toHaveBeenCalled();
    });

    it("does not apply the backoff to a failed initial fetch", async () => {
      // There are no cached credentials to protect, so rate limiting here would
      // only delay a caller that has no credentials at all.
      const ctx = setup();
      ctx.source.mockRejectedValueOnce(new Error("IMDS unreachable"));
      await expect(ctx.cache()).rejects.toThrow();

      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);
      await expect(ctx.cache()).resolves.toBe(fresh);
      expect(ctx.source).toHaveBeenCalledTimes(2);
    });

    it("shares a failed initial fetch between concurrent callers, then lets a later call retry", async () => {
      const ctx = setup();
      const failure = new Error("IMDS unavailable");
      let reject!: (error: Error) => void;
      ctx.source.mockImplementationOnce(
        () =>
          new Promise((_resolve, rejectFn) => {
            reject = rejectFn;
          })
      );
      const callers = [ctx.cache(), ctx.cache(), ctx.cache(), ctx.cache()];
      reject(failure);

      const outcomes = await Promise.allSettled(callers);
      expect(outcomes).toEqual(Array.from({ length: 4 }, () => ({ status: "rejected", reason: failure })));
      expect(ctx.source).toHaveBeenCalledTimes(1);

      const credentials = ctx.credentials();
      ctx.source.mockResolvedValueOnce(credentials);
      await expect(ctx.cache()).resolves.toBe(credentials);
      expect(ctx.source).toHaveBeenCalledTimes(2);
    });

    it("preserves the source error rather than replacing it with a generic one", async () => {
      // The provider chain's message is the only diagnostic a customer gets
      // when no credentials can be resolved.
      const ctx = setup();
      ctx.source.mockRejectedValueOnce(new Error("Could not load credentials from any providers"));

      await expect(ctx.cache()).rejects.toThrow("Could not load credentials from any providers");
    });

    it("contacts the source only once when many callers race the initial fetch", async () => {
      const ctx = setup();
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      const results = await Promise.all([ctx.cache(), ctx.cache(), ctx.cache(), ctx.cache()]);

      expect(results).toEqual([fresh, fresh, fresh, fresh]);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });
  });

  describe("refresh backoff", () => {
    // spec: failed-refresh-backoff-blocks-until-elapsed
    it("does not contact the source again until the backoff has elapsed", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("expired");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));
      await ctx.cache();
      expect(ctx.source).toHaveBeenCalledTimes(1);

      advance(backoffFor(EXPIRED_REMAINING) - 1_000);
      await expect(ctx.cache()).resolves.toBe(seeded);
      expect(ctx.source).toHaveBeenCalledTimes(1);

      advance(2_000);
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);
      await expect(ctx.cache()).resolves.toBe(fresh);
      expect(ctx.source).toHaveBeenCalledTimes(2);
    });

    // The backoff bounds below hold whatever value the jitter produces, so these tests unpin Math.random.
    it.each([
      ["expired", REFRESH_BACKOFF_MIN_UPPER_BOUND],
      ["mandatory", REFRESH_BACKOFF_MIN_UPPER_BOUND],
      ["advisory", REFRESH_BACKOFF_MAX],
    ] as const)("draws the backoff for %s credentials from 1 minute up to %i ms", async (state, upperMs) => {
      vi.mocked(Math.random).mockRestore();
      const ctx = setup();
      await ctx.seed(state);
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));
      await ctx.cache();
      ctx.source.mockClear();

      // One millisecond short of the minimum: still rate limited.
      advance(REFRESH_BACKOFF_MIN - 1);
      await ctx.cache();
      expect(ctx.source).not.toHaveBeenCalled();

      // Past the upper bound for this remaining lifetime: no longer rate limited.
      advance(upperMs - REFRESH_BACKOFF_MIN + 2);
      ctx.source.mockResolvedValueOnce(ctx.credentials());
      await ctx.cache();
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    it("produces no source traffic at all from a flood of callers during backoff", async () => {
      const ctx = setup();
      await ctx.seed("expired");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));
      await ctx.cache();
      ctx.source.mockClear();

      await Promise.all(Array.from({ length: 50 }, () => ctx.cache()));

      expect(ctx.source).not.toHaveBeenCalled();
    });

    it("clears the backoff after a successful refresh", async () => {
      const ctx = setup();
      await ctx.seed("expired");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));
      await ctx.cache();

      advance(backoffFor(EXPIRED_REMAINING) + 1_000);
      ctx.source.mockResolvedValueOnce(ctx.credentials(SIX_HOURS_MS));
      await ctx.cache();

      // Move back into the advisory window of the new credentials. If the
      // backoff had survived the success, this call would not reach the source.
      advance(SIX_HOURS_MS - 30 * 60_000);
      const newer = ctx.credentials();
      ctx.source.mockResolvedValueOnce(newer);
      await expect(ctx.cache()).resolves.toBe(newer);
    });
  });

  describe("advisory window selection", () => {
    // spec: advisory-window-tier-5m, -15m, -60m
    it.each([
      ["10 minutes", 10 * 60_000, 5 * 60_000],
      ["30 minutes", 30 * 60_000, 15 * 60_000],
      ["6 hours", SIX_HOURS_MS, 60 * 60_000],
    ])(
      "selects the window from a %s lifetime and starts refreshing inside it",
      async (_label, lifetimeMs, expectedWindowMs) => {
        const ctx = setup();
        ctx.source.mockResolvedValueOnce(ctx.credentials(lifetimeMs));
        await ctx.cache();
        ctx.source.mockClear();

        // Just outside the window: no refresh.
        advance(lifetimeMs - expectedWindowMs);
        await ctx.cache();
        expect(ctx.source).not.toHaveBeenCalled();

        // Just inside the window: refresh.
        advance(1_000);
        ctx.source.mockResolvedValueOnce(ctx.credentials(lifetimeMs));
        await ctx.cache();
        expect(ctx.source).toHaveBeenCalledTimes(1);
      }
    );

    // spec: advisory-window-recomputed-after-refresh
    it("recomputes the window from the lifetime of each newly refreshed credential set", async () => {
      const ctx = setup();
      // 6 hours selects a 60 minute window.
      ctx.source.mockResolvedValueOnce(ctx.credentials(SIX_HOURS_MS));
      await ctx.cache();

      // 59 minutes remaining, inside the 60 minute window, so this refreshes.
      // The replacement has a 10 minute lifetime, selecting a 5 minute window.
      advance(SIX_HOURS_MS - 59 * 60_000);
      ctx.source.mockResolvedValueOnce(ctx.credentials(10 * 60_000));
      await ctx.cache();
      ctx.source.mockClear();

      // 6 minutes remaining. Outside the new 5 minute window, so no refresh.
      // Under the previous 60 minute window this would have refreshed.
      advance(4 * 60_000);
      await ctx.cache();
      expect(ctx.source).not.toHaveBeenCalled();

      advance(2 * 60_000);
      ctx.source.mockResolvedValueOnce(ctx.credentials());
      await ctx.cache();
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    it("does not recompute the window for the same credentials after a failed refresh", async () => {
      // Recomputing from the shrinking remaining lifetime would narrow the
      // window and could stop the lifecycle from ever retrying.
      const ctx = setup();
      await ctx.seed("advisory"); // 30 minutes remaining, 60 minute window
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));
      await ctx.cache();

      advance(backoffFor(ADVISORY_REMAINING) + 1_000);
      // About 25 minutes remaining. Still inside the original 60 minute window,
      // so a refresh is attempted. Had the window been recomputed from a 25
      // minute lifetime it would be 15 minutes, and no refresh would happen.
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      await expect(ctx.cache()).resolves.toBe(fresh);
    });

    it("never refreshes credentials that carry no expiration", async () => {
      const ctx = setup();
      const staticCredentials = { accessKeyId: "AKID", secretAccessKey: "SECRET" };
      ctx.source.mockResolvedValueOnce(staticCredentials);
      await ctx.cache();
      ctx.source.mockClear();

      advance(365 * 24 * 3600_000);

      await expect(ctx.cache()).resolves.toBe(staticCredentials);
      expect(ctx.source).not.toHaveBeenCalled();
    });

    it("skips the whole lifecycle for credentials that carry no expiration", async () => {
      // Static credentials are out of scope for the spec but still flow through
      // this wrapper, and anyone using AWS_ACCESS_KEY_ID hits this path on
      // every request. Resolving them should cost a single check, not a clock
      // read and a state classification.
      const ctx = setup();
      const staticCredentials = { accessKeyId: "AKID", secretAccessKey: "SECRET" };
      ctx.source.mockResolvedValueOnce(staticCredentials);
      await ctx.cache();

      ctx.source.mockClear();
      clockReads = 0;

      for (let call = 0; call < 10; call++) {
        await expect(ctx.cache()).resolves.toBe(staticCredentials);
      }

      expect(ctx.source).not.toHaveBeenCalled();
      expect(clockReads).toBe(0);
    });

    it("ignores invalidate for credentials that carry no expiration", async () => {
      // The spec scopes static credential sources out entirely, and re-resolving
      // one returns the same value, so a service rejection cannot be fixed by
      // refreshing. botocore reaches the same outcome by gating invalidation on
      // the credential type.
      const ctx = setup();
      const staticCredentials = { accessKeyId: "AKID-1", secretAccessKey: "SECRET" };
      ctx.source.mockResolvedValueOnce(staticCredentials);
      await ctx.cache();
      ctx.source.mockClear();

      ctx.cache.invalidate({ accessKeyId: "AKID-1" });

      await expect(ctx.cache()).resolves.toBe(staticCredentials);
      expect(ctx.source).not.toHaveBeenCalled();
    });
  });

  describe("non-recoverable errors", () => {
    // spec: advisory-non-recoverable-raises-then-recovers,
    //      mandatory-non-recoverable-raises-then-recovers
    it.each(["advisory", "mandatory"] as const)(
      "raises immediately in the %s window instead of falling back to cached credentials",
      async (state) => {
        // Surfacing the error early gives the customer time to act before the
        // credentials expire, rather than waiting out a 5 to 10 minute backoff.
        const ctx = setup();
        await ctx.seed(state);
        const failure = nonRecoverableError();
        ctx.source.mockRejectedValueOnce(failure);

        await expect(ctx.cache()).rejects.toBe(failure);
      }
    );

    it("does not apply the refresh backoff to a non-recoverable error", async () => {
      const ctx = setup();
      await ctx.seed("mandatory");
      ctx.source.mockRejectedValueOnce(nonRecoverableError());
      await expect(ctx.cache()).rejects.toThrow();

      // Past the error cache but far short of the refresh backoff.
      advance(NON_RECOVERABLE_ERROR_CACHE_MAX + 1_000);
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      await expect(ctx.cache()).resolves.toBe(fresh);
    });

    // spec: non-recoverable-error-cached-on-retry
    it("re-raises the cached error without contacting the source", async () => {
      // Protects the source from an application that catches the error and
      // retries in a loop.
      const ctx = setup();
      await ctx.seed("mandatory");
      const failure = nonRecoverableError();
      ctx.source.mockRejectedValueOnce(failure);
      await expect(ctx.cache()).rejects.toBe(failure);
      ctx.source.mockClear();

      for (let attempt = 0; attempt < 10; attempt++) {
        await expect(ctx.cache()).rejects.toBe(failure);
      }
      expect(ctx.source).not.toHaveBeenCalled();
    });

    it("caches the error for no longer than 5 seconds", async () => {
      const ctx = setup();
      await ctx.seed("mandatory");
      ctx.source.mockRejectedValueOnce(nonRecoverableError());
      await expect(ctx.cache()).rejects.toThrow();
      ctx.source.mockClear();

      // One millisecond short of the minimum: still cached whatever value the
      // jitter produced.
      advance(NON_RECOVERABLE_ERROR_CACHE_MIN - 1);
      await expect(ctx.cache()).rejects.toThrow();
      expect(ctx.source).not.toHaveBeenCalled();

      // Past the maximum: no longer cached whatever value it produced.
      advance(NON_RECOVERABLE_ERROR_CACHE_MAX - NON_RECOVERABLE_ERROR_CACHE_MIN + 2);
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);
      await expect(ctx.cache()).resolves.toBe(fresh);
    });

    it("stops re-raising once the error cache expires", async () => {
      const ctx = setup();
      await ctx.seed("mandatory");
      ctx.source.mockRejectedValueOnce(nonRecoverableError());
      await expect(ctx.cache()).rejects.toThrow();

      advance(NON_RECOVERABLE_CACHE_MS + 1);
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      await expect(ctx.cache()).resolves.toBe(fresh);
    });

    // spec: no-cache-non-recoverable-raises-then-recovers
    it("raises the non-recoverable error from an initial fetch and recovers after the cache expires", async () => {
      const ctx = setup();
      const failure = nonRecoverableError();
      ctx.source.mockRejectedValueOnce(failure);
      await expect(ctx.cache()).rejects.toBe(failure);

      await expect(ctx.cache()).rejects.toBe(failure);
      expect(ctx.source).toHaveBeenCalledTimes(1);

      advance(NON_RECOVERABLE_CACHE_MS + 1);
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);
      await expect(ctx.cache()).resolves.toBe(fresh);
    });

    it("does not re-raise a cached error once it has expired and a refresh has succeeded", async () => {
      const ctx = setup();
      await ctx.seed("mandatory");
      ctx.source.mockRejectedValueOnce(nonRecoverableError());
      await expect(ctx.cache()).rejects.toThrow();

      advance(NON_RECOVERABLE_CACHE_MS + 1);
      ctx.source.mockResolvedValueOnce(ctx.credentials(10 * 60_000));
      await ctx.cache();

      // Back inside the new credentials' advisory window, so a refresh is attempted.
      advance(6 * 60_000);
      const newer = ctx.credentials();
      ctx.source.mockResolvedValueOnce(newer);
      await expect(ctx.cache()).resolves.toBe(newer);

      // `storeCredentials` also clears `cachedError` on success, which the spec requires. That
      // clearing is not observable here: no source call can succeed while the error is still
      // cached, so by the time one does, `cachedErrorExpiresAt` is already in the past and the
      // gate is false either way.
    });

    it("treats an unmarked error as recoverable", async () => {
      // Misclassifying a recoverable failure as non-recoverable costs
      // availability, so only an explicit marker counts.
      const ctx = setup();
      const seeded = await ctx.seed("mandatory");
      ctx.source.mockRejectedValueOnce(new Error("socket hang up"));

      await expect(ctx.cache()).resolves.toBe(seeded);
    });
  });

  describe("invalidate", () => {
    describe("while a refresh is in flight", () => {
      it("is skipped, so a failed refresh keeps its full backoff", async () => {
        const ctx = setup();
        await ctx.seed("advisory", "AKID-1");
        let rejectRefresh!: (error: Error) => void;
        ctx.source.mockReturnValueOnce(new Promise((_, reject) => (rejectRefresh = reject)));

        const refreshing = ctx.cache();
        ctx.cache.invalidate({ accessKeyId: "AKID-1" });
        rejectRefresh(new Error("STS unreachable"));
        const result = await refreshing;

        // The cached credentials keep their real expiration, so the backoff is based on it.
        expect(result.expiration!.getTime()).toBe(now + ADVISORY_REMAINING);
        advance(REFRESH_BACKOFF_MIN_UPPER_BOUND);
        await ctx.cache();
        expect(ctx.source).toHaveBeenCalledTimes(1);
      });

      it("is skipped when the refresh succeeds, so the new credentials stay valid", async () => {
        const ctx = setup();
        await ctx.seed("advisory", "AKID-1");
        const fresh = ctx.credentials(SIX_HOURS_MS, "AKID-2");
        let resolveRefresh!: (credentials: AwsCredentialIdentity) => void;
        ctx.source.mockReturnValueOnce(new Promise((resolve) => (resolveRefresh = resolve)));

        const refreshing = ctx.cache();
        ctx.cache.invalidate({ accessKeyId: "AKID-1" });
        resolveRefresh(fresh);
        await refreshing;

        await expect(ctx.cache()).resolves.toBe(fresh);
        expect(ctx.source).toHaveBeenCalledTimes(1);
      });

      it("applies again once the refresh has finished", async () => {
        const ctx = setup();
        await ctx.seed("advisory", "AKID-1");
        let rejectRefresh!: (error: Error) => void;
        ctx.source.mockReturnValueOnce(new Promise((_, reject) => (rejectRefresh = reject)));
        const refreshing = ctx.cache();
        rejectRefresh(new Error("STS unreachable"));
        await refreshing;

        ctx.cache.invalidate({ accessKeyId: "AKID-1" });

        expect((await ctx.cache()).expiration!.getTime()).toBe(now);
      });
    });

    describe("telling the source which credentials were rejected (token-backed providers)", () => {
      const rejectedKeyPassed = (source: ReturnType<typeof setup>["source"]) =>
        (source.mock.calls.at(-1)?.[0] as { rejectedAccessKeyId?: string } | undefined)?.rejectedAccessKeyId;

      it("passes the rejected access key ID on the refresh that follows invalidate", async () => {
        const ctx = setup();
        await ctx.seed("valid", "AKID-1");
        ctx.source.mockResolvedValueOnce(ctx.credentials());

        ctx.cache.invalidate({ accessKeyId: "AKID-1" });
        await ctx.cache();

        expect(rejectedKeyPassed(ctx.source)).toBe("AKID-1");
      });

      it("drops a rejectedAccessKeyId the caller passed, since only the lifecycle sets it", async () => {
        const ctx = setup();
        await ctx.seed("mandatory", "AKID-1");
        ctx.source.mockResolvedValueOnce(ctx.credentials());

        await ctx.cache({ rejectedAccessKeyId: "AKID-1" } as Parameters<typeof ctx.cache>[0]);

        expect(ctx.source).toHaveBeenCalledTimes(1);
        expect(rejectedKeyPassed(ctx.source)).toBeUndefined();
      });

      it("does not pass it on a routine refresh", async () => {
        const ctx = setup();
        await ctx.seed("mandatory", "AKID-1");
        ctx.source.mockResolvedValueOnce(ctx.credentials());

        await ctx.cache();

        expect(ctx.source).toHaveBeenCalledTimes(1);
        expect(rejectedKeyPassed(ctx.source)).toBeUndefined();
      });

      it("stops passing it once a refresh replaced the rejected credentials", async () => {
        const ctx = setup();
        await ctx.seed("valid", "AKID-1");
        const replacement = ctx.credentials(SIX_HOURS_MS, "AKID-2");
        ctx.source.mockResolvedValueOnce(replacement);
        ctx.cache.invalidate({ accessKeyId: "AKID-1" });
        await ctx.cache();

        advance(SIX_HOURS_MS - 30_000);
        ctx.source.mockResolvedValueOnce(ctx.credentials());
        await ctx.cache();

        expect(rejectedKeyPassed(ctx.source)).toBeUndefined();
      });

      it("stops passing it when the source returns the same credentials again", async () => {
        const ctx = setup();
        await ctx.seed("valid", "AKID-1");
        ctx.source.mockResolvedValueOnce(ctx.credentials(SIX_HOURS_MS, "AKID-1"));
        ctx.cache.invalidate({ accessKeyId: "AKID-1" });
        await ctx.cache();

        advance(SIX_HOURS_MS - 30_000);
        ctx.source.mockResolvedValueOnce(ctx.credentials());
        await ctx.cache();

        // A routine refresh, so the source is not told the credentials were rejected.
        expect(rejectedKeyPassed(ctx.source)).toBeUndefined();
      });

      it("keeps passing it after a failed refresh, so the attempt after the backoff still asks for new credentials", async () => {
        const ctx = setup();
        await ctx.seed("valid", "AKID-1");
        ctx.source.mockRejectedValueOnce(new Error("Sign-In unreachable"));
        ctx.cache.invalidate({ accessKeyId: "AKID-1" });
        await ctx.cache();

        advance(REFRESH_BACKOFF_MIN_UPPER_BOUND);
        ctx.source.mockResolvedValueOnce(ctx.credentials());
        await ctx.cache();

        expect(ctx.source).toHaveBeenCalledTimes(2);
        expect(rejectedKeyPassed(ctx.source)).toBe("AKID-1");
      });
    });

    // spec: invalidate-matching-akid-refresh-succeeds
    it("routes the next resolution through a refresh when the access key matches", async () => {
      const ctx = setup();
      await ctx.seed("valid", "AKID-1");
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      ctx.cache.invalidate({ accessKeyId: "AKID-1" });

      await expect(ctx.cache()).resolves.toBe(fresh);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    // spec: invalidate-matching-akid-refresh-fails
    it("keeps using the cached credentials, now expired, when the triggered refresh fails", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("valid", "AKID-1");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));

      ctx.cache.invalidate({ accessKeyId: "AKID-1" });

      await expect(ctx.cache()).resolves.toEqual({ ...seeded, expiration: new Date(now) });
    });

    it("sets the cached expiration to now, without changing the object callers hold", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("valid", "AKID-1");
      const originalExpiration = seeded.expiration!.getTime();

      ctx.cache.invalidate({ accessKeyId: "AKID-1" });

      expect(seeded.expiration!.getTime()).toBe(originalExpiration);
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));
      const returned = await ctx.cache();
      expect(returned).not.toBe(seeded);
      expect(returned.expiration).toEqual(new Date(now));
    });

    it("backs off for 1 to 1.5 minutes when the triggered refresh fails, as for expired credentials", async () => {
      // Without setting Expiration to now, the backoff would scale with the real remaining
      // lifetime (here 2 hours, so up to 10 minutes) and keep signing with rejected credentials.
      vi.mocked(Math.random).mockRestore();
      const ctx = setup();
      await ctx.seed("valid", "AKID-1");
      ctx.cache.invalidate({ accessKeyId: "AKID-1" });
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));
      await ctx.cache();
      ctx.source.mockClear();

      advance(REFRESH_BACKOFF_MIN - 1);
      await ctx.cache();
      expect(ctx.source).not.toHaveBeenCalled();

      advance(REFRESH_BACKOFF_MIN_UPPER_BOUND - REFRESH_BACKOFF_MIN + 2);
      ctx.source.mockResolvedValueOnce(ctx.credentials());
      await ctx.cache();
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    // spec: invalidate-stale-akid-is-ignored
    it("ignores a rejection for credentials a concurrent refresh already replaced", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("valid", "AKID-2");

      ctx.cache.invalidate({ accessKeyId: "AKID-1" });

      await expect(ctx.cache()).resolves.toBe(seeded);
      expect(ctx.source).not.toHaveBeenCalled();
    });

    // spec: invalidate-during-backoff-waits-for-expiry
    it("does not bypass the refresh backoff", async () => {
      // Otherwise a credential source outage turns a flood of service
      // rejections into a flood of refresh attempts.
      const ctx = setup();
      const seeded = await ctx.seed("expired", "AKID-1");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));
      await ctx.cache();
      ctx.source.mockClear();

      advance(60_000);
      ctx.cache.invalidate({ accessKeyId: "AKID-1" });

      await expect(ctx.cache()).resolves.toEqual({ ...seeded, expiration: new Date(now) });
      expect(ctx.source).not.toHaveBeenCalled();

      advance(backoffFor(EXPIRED_REMAINING));
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);
      await expect(ctx.cache()).resolves.toBe(fresh);
    });

    it("stops requiring a refresh once the invalidate-triggered refresh succeeds", async () => {
      // Otherwise a single rejection leaves the cache permanently in the
      // mandatory state, and every later call contacts the credential source.
      const ctx = setup();
      await ctx.seed("valid", "AKID-1");
      const fresh = ctx.credentials(SIX_HOURS_MS);
      ctx.source.mockResolvedValueOnce(fresh);

      ctx.cache.invalidate({ accessKeyId: "AKID-1" });
      await expect(ctx.cache()).resolves.toBe(fresh);
      ctx.source.mockClear();

      await expect(ctx.cache()).resolves.toBe(fresh);
      await expect(ctx.cache()).resolves.toBe(fresh);
      expect(ctx.source).not.toHaveBeenCalled();
    });

    it("does not discard the cached credentials", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("valid", "AKID-1");
      ctx.cache.invalidate({ accessKeyId: "AKID-1" });
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));

      await expect(ctx.cache()).resolves.toMatchObject({
        accessKeyId: seeded.accessKeyId,
        secretAccessKey: seeded.secretAccessKey,
        sessionToken: seeded.sessionToken,
      });
    });

    it("is a no-op before any credentials have been obtained", async () => {
      const ctx = setup();
      expect(() => ctx.cache.invalidate({ accessKeyId: "AKID-1" })).not.toThrow();

      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);
      await expect(ctx.cache()).resolves.toBe(fresh);
    });

    it("does not affect the credentials an in-flight refresh stores", async () => {
      const ctx = setup();
      await ctx.seed("mandatory", "AKID-1");
      let release!: (credentials: AwsCredentialIdentity) => void;
      ctx.source.mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            release = resolve;
          })
      );
      const refreshing = ctx.cache();

      ctx.cache.invalidate({ accessKeyId: "AKID-1" });

      const fresh = ctx.credentials(SIX_HOURS_MS);
      release(fresh);
      await expect(refreshing).resolves.toBe(fresh);

      // The invalidate applied to the old set, so the new set needs no refresh.
      ctx.source.mockClear();
      await expect(ctx.cache()).resolves.toBe(fresh);
      expect(ctx.source).not.toHaveBeenCalled();
    });
  });

  describe("concurrency", () => {
    // spec concurrency test 1
    it("advisory: one refresh runs and other callers get cached credentials without waiting", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("advisory");
      let release!: (credentials: AwsCredentialIdentity) => void;
      ctx.source.mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            release = resolve;
          })
      );

      const refreshing = ctx.cache();
      expect(ctx.source).toHaveBeenCalledTimes(1);

      // Resolves while the refresh is still in flight, with the old credentials.
      await expect(ctx.cache()).resolves.toBe(seeded);
      await expect(ctx.cache()).resolves.toBe(seeded);
      expect(ctx.source).toHaveBeenCalledTimes(1);

      const fresh = ctx.credentials();
      release(fresh);
      await expect(refreshing).resolves.toBe(fresh);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    // spec concurrency test 2
    it.each(["mandatory", "expired"] as const)(
      "%s: one refresh runs and all callers wait and reuse its result",
      async (state) => {
        const ctx = setup();
        await ctx.seed(state);
        let release!: (credentials: AwsCredentialIdentity) => void;
        ctx.source.mockImplementationOnce(
          () =>
            new Promise((resolve) => {
              release = resolve;
            })
        );

        const callers = [ctx.cache(), ctx.cache(), ctx.cache(), ctx.cache()];
        const fresh = ctx.credentials(SIX_HOURS_MS);
        release(fresh);

        await expect(Promise.all(callers)).resolves.toEqual([fresh, fresh, fresh, fresh]);
        expect(ctx.source).toHaveBeenCalledTimes(1);
      }
    );

    it("mandatory: a failed refresh is not retried by the waiting callers", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("expired");
      let reject!: (error: Error) => void;
      ctx.source.mockImplementationOnce(
        () =>
          new Promise((_resolve, rejectFn) => {
            reject = rejectFn;
          })
      );

      const callers = [ctx.cache(), ctx.cache(), ctx.cache()];
      reject(new Error("STS unreachable"));

      // Every caller gets the cached credentials, and the backoff the first
      // caller applied keeps the others from contacting the source.
      await expect(Promise.all(callers)).resolves.toEqual([seeded, seeded, seeded]);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    it("does not deadlock when a caller arrives during the release of a previous refresh", async () => {
      const ctx = setup();
      await ctx.seed("expired");
      const fresh = ctx.credentials(SIX_HOURS_MS);
      ctx.source.mockResolvedValueOnce(fresh);

      const first = ctx.cache();
      const second = first.then(() => ctx.cache());

      await expect(Promise.all([first, second])).resolves.toEqual([fresh, fresh]);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });
  });

  describe("forceRefresh", () => {
    it("refreshes valid credentials", async () => {
      const ctx = setup();
      await ctx.seed("valid");
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      await expect(ctx.cache({ forceRefresh: true })).resolves.toBe(fresh);
      await expect(ctx.cache()).resolves.toBe(fresh);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    it("refreshes static credentials", async () => {
      const ctx = setup();
      const staticCreds = { accessKeyId: "STATIC", secretAccessKey: "SECRET" };
      ctx.source.mockResolvedValueOnce(staticCreds);
      await ctx.cache();
      const fresh = { accessKeyId: "STATIC-2", secretAccessKey: "SECRET" };
      ctx.source.mockResolvedValueOnce(fresh);

      await expect(ctx.cache({ forceRefresh: true })).resolves.toBe(fresh);
    });

    it("shares one source call across concurrent forced callers", async () => {
      const ctx = setup();
      await ctx.seed("valid");
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      const callers = Array.from({ length: 5 }, () => ctx.cache({ forceRefresh: true }));

      await expect(Promise.all(callers)).resolves.toEqual(Array(5).fill(fresh));
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });

    it("returns the cached credentials when the forced refresh fails", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("valid");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));

      await expect(ctx.cache({ forceRefresh: true })).resolves.toBe(seeded);
      expect(ctx.logger.warn).toHaveBeenCalledTimes(1);
    });

    it("is held back by the refresh backoff", async () => {
      const ctx = setup();
      const seeded = await ctx.seed("valid");
      ctx.source.mockRejectedValueOnce(new Error("STS unreachable"));
      await ctx.cache({ forceRefresh: true });
      ctx.source.mockClear();

      await expect(ctx.cache({ forceRefresh: true })).resolves.toBe(seeded);
      expect(ctx.source).not.toHaveBeenCalled();

      advance(backoffFor(VALID_REMAINING));
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);
      await expect(ctx.cache({ forceRefresh: true })).resolves.toBe(fresh);
    });

    it("fetches initially when nothing is cached", async () => {
      const ctx = setup();
      const fresh = ctx.credentials();
      ctx.source.mockResolvedValueOnce(fresh);

      await expect(ctx.cache({ forceRefresh: true })).resolves.toBe(fresh);
      expect(ctx.source).toHaveBeenCalledTimes(1);
    });
  });
});
