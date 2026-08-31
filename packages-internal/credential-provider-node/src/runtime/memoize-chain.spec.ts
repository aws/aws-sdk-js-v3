import type { AwsIdentityProperties, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/core/config";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { credentialsWillNeedRefresh } from "../defaultProvider";
import { memoizeChain } from "./memoize-chain";

describe("memoize runtime config aware AWS credential chain", () => {
  let staticCredentials!: RuntimeConfigAwsCredentialIdentityProvider;
  let expiringCredentials!: RuntimeConfigAwsCredentialIdentityProvider;

  const expiration = new Date(Date.now() + 5_000);

  beforeEach(() => {
    vi.resetAllMocks();
    staticCredentials = vi.fn().mockImplementation(async (options?: AwsIdentityProperties) => {
      await new Promise((r) => setTimeout(r, 100));
      return {
        accessKeyId: "",
        secretAccessKey: "",
        runtimeOptions: Object.keys(options ?? {}).concat(Object.keys(options?.callerClientConfig ?? {})),
      };
    });

    let sequence = 0;

    expiringCredentials = vi.fn().mockImplementation(async (options?: AwsIdentityProperties) => {
      await new Promise((r) => setTimeout(r, 100));
      return {
        accessKeyId: "",
        secretAccessKey: "",
        expiration,
        sequence: sequence++,
        runtimeOptions: Object.keys(options ?? {}).concat(Object.keys(options?.callerClientConfig ?? {})),
      };
    });
  });

  it("should call composed provider functions", async () => {
    const provider = memoizeChain([staticCredentials], credentialsWillNeedRefresh);

    const credentials = await provider({
      callerClientConfig: {
        region: async () => "context-region",
        profile: "alt",
      },
    });

    expect(credentials).toEqual({
      accessKeyId: "",
      secretAccessKey: "",
      runtimeOptions: ["callerClientConfig", "region", "profile"],
    });
    expect(staticCredentials).toHaveBeenCalledTimes(1);
  });

  it("should use an active lock when no credentials exist", async () => {
    const provider = memoizeChain([staticCredentials], credentialsWillNeedRefresh);

    const [credentials] = await Promise.all([provider(), provider(), provider(), provider(), provider()]);

    expect(credentials).toEqual({
      accessKeyId: "",
      secretAccessKey: "",
      runtimeOptions: [],
    });
    expect(staticCredentials).toHaveBeenCalledTimes(1);
  });

  it("should use a cache", async () => {
    const provider = memoizeChain([staticCredentials], credentialsWillNeedRefresh);

    await Promise.all([provider(), provider(), provider(), provider(), provider()]);
    const [credentials] = await Promise.all([provider(), provider(), provider(), provider(), provider()]);

    expect(credentials).toEqual({
      accessKeyId: "",
      secretAccessKey: "",
      runtimeOptions: [],
    });
    expect(staticCredentials).toHaveBeenCalledTimes(1);
  });

  it("should use a passive lock when credentials do exist", async () => {
    const provider = memoizeChain([expiringCredentials], credentialsWillNeedRefresh);

    {
      // initial invocation returns sequence-0 credentials.
      const credentials = await Promise.all([provider(), provider(), provider(), provider(), provider()]);
      for (const c of credentials) {
        expect(c).toEqual({
          accessKeyId: "",
          secretAccessKey: "",
          expiration,
          sequence: 0,
          runtimeOptions: [],
        });
      }
      expect(expiringCredentials).toHaveBeenCalledTimes(1);
    }

    {
      // second invocation returns sequence-0 credentials, but background initializes refresh.
      const credentials = await Promise.all([provider(), provider(), provider(), provider(), provider()]);
      for (const c of credentials) {
        expect(c).toEqual({
          accessKeyId: "",
          secretAccessKey: "",
          expiration,
          sequence: 0,
          runtimeOptions: [],
        });
      }
      expect(expiringCredentials).toHaveBeenCalledTimes(2);
    }

    // allow new credentials to settle
    await new Promise((r) => setTimeout(r, 200));

    {
      // third invocation group returns sequence-1 credentials, also with background refresh.
      const credentials = await Promise.all([provider(), provider(), provider(), provider(), provider()]);
      for (const c of credentials) {
        expect(c).toEqual({
          accessKeyId: "",
          secretAccessKey: "",
          expiration,
          sequence: 1,
          runtimeOptions: [],
        });
      }
      expect(expiringCredentials).toHaveBeenCalledTimes(3);
    }
  });

  it("can be force refreshed", async () => {
    const provider = memoizeChain([expiringCredentials], credentialsWillNeedRefresh);

    // Initial call to populate cache with sequence 0.
    await provider();
    expect(expiringCredentials).toHaveBeenCalledTimes(1);

    // Force refresh gets new credentials.
    const refreshed = await provider({ forceRefresh: true });
    expect(expiringCredentials).toHaveBeenCalledTimes(2);
    expect(refreshed).toEqual({
      accessKeyId: "",
      secretAccessKey: "",
      expiration,
      sequence: 1,
      runtimeOptions: ["forceRefresh"],
    });
  });

  it("should coalesce concurrent forceRefresh calls to prevent stampede", async () => {
    const provider = memoizeChain([expiringCredentials], credentialsWillNeedRefresh);

    // Populate cache first.
    await provider();
    expect(expiringCredentials).toHaveBeenCalledTimes(1);

    // 5 concurrent forceRefresh calls should coalesce into 1 upstream call.
    const results = await Promise.all([
      provider({ forceRefresh: true }),
      provider({ forceRefresh: true }),
      provider({ forceRefresh: true }),
      provider({ forceRefresh: true }),
      provider({ forceRefresh: true }),
    ]);
    expect(expiringCredentials).toHaveBeenCalledTimes(2);

    // All results should be the same credentials object.
    for (const r of results) {
      expect(r).toBe(results[0]);
    }
  });

  it("should update cache on forceRefresh so subsequent calls return refreshed credentials", async () => {
    const provider = memoizeChain([staticCredentials], credentialsWillNeedRefresh);

    // Initial call populates cache.
    await provider();
    expect(staticCredentials).toHaveBeenCalledTimes(1);

    // Force refresh updates cache.
    const refreshed = await provider({ forceRefresh: true });
    expect(staticCredentials).toHaveBeenCalledTimes(2);

    // Subsequent call without forceRefresh returns cached (refreshed) value.
    const cached = await provider();
    expect(staticCredentials).toHaveBeenCalledTimes(2);
    expect(cached).toBe(refreshed);
  });

  it("should not surface an unhandled rejection when the passive refresh fails", async () => {
    // own expiration so the case stays on the passive path regardless of
    // cumulative suite time (the shared 5s constant is captured at collection).
    const farExpiration = new Date(Date.now() + 60_000);
    let sequence = 0;
    const flakyExpiringCredentials: RuntimeConfigAwsCredentialIdentityProvider = vi
      .fn()
      .mockImplementation(async () => {
        await new Promise((r) => setTimeout(r, 100));
        const current = sequence++;
        if (current === 1) {
          throw new CredentialsProviderError("transient refresh failure", { tryNextLink: false });
        }
        return {
          accessKeyId: "",
          secretAccessKey: "",
          expiration: farExpiration,
          sequence: current,
        };
      });

    const unhandled: unknown[] = [];
    const onUnhandledRejection = (reason: unknown) => {
      unhandled.push(reason);
    };
    process.on("unhandledRejection", onUnhandledRejection);

    try {
      const provider = memoizeChain([flakyExpiringCredentials], credentialsWillNeedRefresh);

      // initial invocation caches sequence-0 credentials via the active lock.
      const initial = await provider();
      expect(initial).toMatchObject({ sequence: 0 });

      // second invocation returns the stale-but-valid credentials and starts the
      // passive background refresh, which rejects (sequence-1).
      const stale = await provider();
      expect(stale).toMatchObject({ sequence: 0 });

      // allow the rejected background refresh to settle and node to dispatch
      // any unhandled rejection.
      await new Promise((r) => setTimeout(r, 200));
      await new Promise((r) => setImmediate(r));

      expect(unhandled).toEqual([]);

      // the failed refresh released the lock: the next invocation retries the
      // chain (sequence-2) while still returning the cached credentials.
      const retried = await provider();
      expect(retried).toMatchObject({ sequence: 0 });

      await new Promise((r) => setTimeout(r, 200));

      const settled = await provider();
      expect(settled).toMatchObject({ sequence: 2 });
    } finally {
      process.off("unhandledRejection", onUnhandledRejection);
    }
  });

  it("should release locks on credential resolution failure at the end of the chain", async () => {
    const neverAvailableCredentialProvider: () => RuntimeConfigAwsCredentialIdentityProvider = () => async () => {
      throw new CredentialsProviderError("never available", { tryNextLink: true });
    };

    let n = 0;
    const eventuallyAvailableCredentialProvider: RuntimeConfigAwsCredentialIdentityProvider = async () => {
      if (n++ === 0) {
        throw new CredentialsProviderError("initially unavailable", { tryNextLink: false });
      }
      return {
        accessKeyId: "xyz",
        secretAccessKey: "xyz",
      };
    };

    const provider = memoizeChain(
      [neverAvailableCredentialProvider(), neverAvailableCredentialProvider(), eventuallyAvailableCredentialProvider],
      credentialsWillNeedRefresh
    );

    try {
      await provider();
    } catch (e) {
      const credentials = await provider();
      expect(credentials).toEqual({
        accessKeyId: "xyz",
        secretAccessKey: "xyz",
      });
    }
    expect.assertions(1);
  });
});
