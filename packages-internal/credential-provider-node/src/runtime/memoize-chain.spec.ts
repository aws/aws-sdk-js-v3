import { createCredentialRefreshProvider, markNonRecoverable } from "@aws-sdk/core/client";
import type { AwsIdentityProperties, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/core/config";
import type { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { credentialsTreatedAsExpired } from "../defaultProvider";
import { createLazyCredentialProvider, memoizeChain } from "./memoize-chain";

const SIX_HOURS = 6 * 3600_000;
const START_MS = new Date("2024-01-01T00:00:00Z").getTime();
let now: number;

const advance = (ms: number) => {
  now += ms;
};

const credentials = (lifetime = SIX_HOURS, accessKeyId = "AKID"): AwsCredentialIdentity => ({
  accessKeyId,
  secretAccessKey: "SECRET",
  expiration: new Date(now + lifetime),
});

const source = () =>
  vi.fn<RuntimeConfigAwsCredentialIdentityProvider>(async (options?: AwsIdentityProperties) => ({
    ...credentials(),
    runtimeOptions: Object.keys(options ?? {}).concat(Object.keys(options?.callerClientConfig ?? {})),
  }));

describe("memoizeChain", () => {
  beforeEach(() => {
    now = START_MS;
    vi.spyOn(Date, "now").mockImplementation(() => now);
    vi.spyOn(Math, "random").mockReturnValue(0.4);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("selects the first provider that succeeds and remembers it", async () => {
    const skipped = vi.fn(async () => {
      throw new CredentialsProviderError("not configured", { tryNextLink: true });
    });
    const selected = source();
    const later = source();
    const chain = memoizeChain([skipped, selected, later], credentialsTreatedAsExpired);

    await chain();
    await chain();

    expect(skipped).toHaveBeenCalledTimes(1);
    expect(selected).toHaveBeenCalledTimes(1);
    expect(later).not.toHaveBeenCalled();
  });

  it("shares provider selection between concurrent callers", async () => {
    let release!: (value: AwsCredentialIdentity) => void;
    const selected = vi.fn(() => new Promise<AwsCredentialIdentity>((resolve) => (release = resolve)));
    const chain = memoizeChain([selected], credentialsTreatedAsExpired);

    const callers = [chain(), chain(), chain()];
    release(credentials());

    await expect(Promise.all(callers)).resolves.toHaveLength(3);
    expect(selected).toHaveBeenCalledTimes(1);
  });

  it("stops when a provider does not permit the next link", async () => {
    const failure = new CredentialsProviderError("terminal", { tryNextLink: false });
    const selected = vi.fn(async () => {
      throw failure;
    });
    const later = source();
    const chain = memoizeChain([selected, later], credentialsTreatedAsExpired);

    await expect(chain()).rejects.toBe(failure);
    expect(later).not.toHaveBeenCalled();
  });

  describe("providers outside the spec", () => {
    it("keeps the previous cache behavior for an unmarked provider", async () => {
      const process = source();
      const chain = memoizeChain([process], credentialsTreatedAsExpired);

      const first = await chain();
      await expect(chain()).resolves.toBe(first);
      expect(process).toHaveBeenCalledTimes(1);
    });

    it("keeps the previous passive five-minute refresh", async () => {
      let sequence = 0;
      const process = vi.fn(async () => ({ ...credentials(), sequence: sequence++ }));
      const chain = memoizeChain([process], credentialsTreatedAsExpired);
      await chain();
      advance(SIX_HOURS - 4 * 60_000);

      const stale = await chain();
      expect(stale).toMatchObject({ sequence: 0 });
      await new Promise((resolve) => setImmediate(resolve));
      await expect(chain()).resolves.toMatchObject({ sequence: 1 });
    });

    it("keeps the previous hard-expiry behavior", async () => {
      const process = source();
      const chain = memoizeChain([process], credentialsTreatedAsExpired);
      await chain();
      advance(SIX_HOURS + 1);
      process.mockRejectedValueOnce(new Error("process failed"));

      await expect(chain()).rejects.toThrow("process failed");
    });

    it("keeps forceRefresh behavior and updates the legacy cache", async () => {
      let sequence = 0;
      const process = vi.fn(async () => ({ ...credentials(), sequence: sequence++ }));
      const chain = memoizeChain([process], credentialsTreatedAsExpired);
      await chain();

      const refreshed = await chain({ forceRefresh: true });

      expect(refreshed).toMatchObject({ sequence: 1 });
      await expect(chain()).resolves.toBe(refreshed);
      expect(process).toHaveBeenCalledTimes(2);
    });

    it("re-runs the full chain when an out-of-scope provider refreshes", async () => {
      let environmentAvailable = false;
      const environment = vi.fn(async () => {
        if (!environmentAvailable) {
          throw new CredentialsProviderError("not configured", { tryNextLink: true });
        }
        return credentials(SIX_HOURS, "ENV");
      });
      const process = vi.fn(async () => credentials(SIX_HOURS, "PROCESS"));
      const chain = memoizeChain([environment, process], credentialsTreatedAsExpired);
      await expect(chain()).resolves.toMatchObject({ accessKeyId: "PROCESS" });
      environmentAvailable = true;
      advance(SIX_HOURS + 1);

      await expect(chain()).resolves.toMatchObject({ accessKeyId: "ENV" });
      expect(environment).toHaveBeenCalledTimes(2);
      expect(process).toHaveBeenCalledTimes(1);
    });

    it("treats a memoized fromIni Process provider as legacy when it has no invalidate method", async () => {
      let environmentAvailable = false;
      const environment = vi.fn(async () => {
        if (!environmentAvailable) {
          throw new CredentialsProviderError("not configured", { tryNextLink: true });
        }
        return credentials(SIX_HOURS, "ENV");
      });
      const process = Object.assign(
        vi.fn(async () => credentials(SIX_HOURS, "PROCESS")),
        { memoized: true as const }
      );
      const fromIni = createLazyCredentialProvider(async () => process);
      const chain = memoizeChain([environment, fromIni], credentialsTreatedAsExpired);
      await expect(chain()).resolves.toMatchObject({ accessKeyId: "PROCESS" });
      environmentAvailable = true;
      advance(SIX_HOURS + 1);

      await expect(chain()).resolves.toMatchObject({ accessKeyId: "ENV" });
      expect(environment).toHaveBeenCalledTimes(2);
      expect(process).toHaveBeenCalledTimes(1);
    });

    it("can transition from legacy behavior to an in-scope provider when the chain changes", async () => {
      let processAvailable = true;
      const process = vi.fn(async () => {
        if (!processAvailable) {
          throw new CredentialsProviderError("process failed", { tryNextLink: true });
        }
        return credentials(SIX_HOURS, "PROCESS");
      });
      const inScope = createCredentialRefreshProvider(async () => credentials(SIX_HOURS, "SSO"));
      const chain = memoizeChain([process, inScope], credentialsTreatedAsExpired);
      await chain();
      processAvailable = false;
      advance(SIX_HOURS + 1);

      await expect(chain()).resolves.toMatchObject({ accessKeyId: "SSO" });
      expect(typeof chain.invalidate).toBe("function");
    });

    it("does not expose invalidate", async () => {
      const chain = memoizeChain([source()], credentialsTreatedAsExpired);
      await chain();

      expect(chain.invalidate).toBeUndefined();
    });
  });

  describe("providers covered by the spec", () => {
    it("delegates caching and refresh timing to the provider", async () => {
      const raw = source();
      const refreshProvider = createCredentialRefreshProvider(raw);
      const chain = memoizeChain([refreshProvider], credentialsTreatedAsExpired);

      const first = await chain();
      advance(SIX_HOURS - 30 * 60_000);
      await chain();

      expect(first.accessKeyId).toBe("AKID");
      expect(raw).toHaveBeenCalledTimes(2);
    });

    it("keeps expired credentials when refresh fails", async () => {
      const raw = source();
      const refreshProvider = createCredentialRefreshProvider(raw);
      const chain = memoizeChain([refreshProvider], credentialsTreatedAsExpired);
      const first = await chain();
      advance(SIX_HOURS + 1);
      raw.mockRejectedValueOnce(new Error("STS unavailable"));

      await expect(chain()).resolves.toBe(first);
    });

    // Marking an error non-recoverable must not change whether the chain moves to the next provider.
    describe("non-recoverable errors keep their tryNextLink behavior", () => {
      it("moves to the next provider when the marked error allows it", async () => {
        const failing = vi.fn<RuntimeConfigAwsCredentialIdentityProvider>(async () => {
          throw markNonRecoverable(new CredentialsProviderError("run aws sso login", { tryNextLink: true }));
        });
        const next = source();
        const chain = memoizeChain([createCredentialRefreshProvider(failing), next], credentialsTreatedAsExpired);

        await expect(chain()).resolves.toMatchObject({ accessKeyId: "AKID" });
        expect(failing).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledTimes(1);
      });

      it("stops the chain when the marked error does not allow the next link", async () => {
        const error = markNonRecoverable(new CredentialsProviderError("run aws sso login", { tryNextLink: false }));
        const next = source();
        const chain = memoizeChain(
          [createCredentialRefreshProvider(async () => Promise.reject(error)), next],
          credentialsTreatedAsExpired
        );

        await expect(chain()).rejects.toBe(error);
        expect(next).not.toHaveBeenCalled();
      });

      it("keeps the same outcome on a later call while the error is cached", async () => {
        const error = markNonRecoverable(new CredentialsProviderError("run aws sso login", { tryNextLink: false }));
        const failing = vi.fn<RuntimeConfigAwsCredentialIdentityProvider>(async () => Promise.reject(error));
        const chain = memoizeChain([createCredentialRefreshProvider(failing), source()], credentialsTreatedAsExpired);

        await expect(chain()).rejects.toBe(error);
        await expect(chain()).rejects.toBe(error);
        // The cached error is rethrown without calling the source again.
        expect(failing).toHaveBeenCalledTimes(1);
      });

      it("moves to the next provider when a pinned provider's refresh fails with an error that allows it", async () => {
        const raw = source();
        const next = vi.fn<RuntimeConfigAwsCredentialIdentityProvider>(async () => credentials(SIX_HOURS, "NEXT"));
        const chain = memoizeChain([createCredentialRefreshProvider(raw), next], credentialsTreatedAsExpired);
        await chain();
        advance(SIX_HOURS + 1);
        raw.mockRejectedValueOnce(
          markNonRecoverable(new CredentialsProviderError("run aws sso login", { tryNextLink: true }))
        );

        await expect(chain()).resolves.toMatchObject({ accessKeyId: "NEXT" });
        expect(next).toHaveBeenCalledTimes(1);
      });

      it("stops when a pinned provider's refresh fails with an error that does not allow the next link", async () => {
        const raw = source();
        const next = source();
        const chain = memoizeChain([createCredentialRefreshProvider(raw), next], credentialsTreatedAsExpired);
        await chain();
        advance(SIX_HOURS + 1);
        const error = markNonRecoverable(new CredentialsProviderError("run aws sso login", { tryNextLink: false }));
        raw.mockRejectedValueOnce(error);

        await expect(chain()).rejects.toBe(error);
        expect(next).not.toHaveBeenCalled();
      });
    });

    it("forwards invalidate to the selected provider", async () => {
      const raw = source();
      const refreshProvider = createCredentialRefreshProvider(raw);
      const chain = memoizeChain([refreshProvider], credentialsTreatedAsExpired);
      await chain();

      chain.invalidate?.({ accessKeyId: "AKID" });
      await chain();

      expect(raw).toHaveBeenCalledTimes(2);
    });

    it("does not expose invalidate before a provider is selected", () => {
      const chain = memoizeChain([createCredentialRefreshProvider(source())], credentialsTreatedAsExpired);

      expect(chain.invalidate).toBeUndefined();
    });
  });
});

describe("createLazyCredentialProvider", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("creates the provider once and forwards caller options", async () => {
    const inner = vi.fn(async (options?: AwsIdentityProperties) => ({
      accessKeyId: "STATIC",
      secretAccessKey: "SECRET",
      runtimeOptions: Object.keys(options ?? {}).concat(Object.keys(options?.callerClientConfig ?? {})),
    }));
    const factory = vi.fn(async () => createCredentialRefreshProvider(inner));
    const provider = createLazyCredentialProvider(factory);
    const options = { callerClientConfig: { region: async () => "us-west-2" } };

    await provider(options);
    await provider(options);

    expect(factory).toHaveBeenCalledTimes(1);
    expect(inner).toHaveBeenCalledTimes(1);
    expect(inner).toHaveBeenCalledWith(options);
  });

  it("shares lazy initialization between concurrent callers", async () => {
    let release!: (provider: ReturnType<typeof createCredentialRefreshProvider>) => void;
    const factory = vi.fn(() => new Promise<ReturnType<typeof createCredentialRefreshProvider>>((r) => (release = r)));
    const inner = source();
    const provider = createLazyCredentialProvider(factory);

    const callers = [provider(), provider(), provider()];
    release(createCredentialRefreshProvider(inner));

    await Promise.all(callers);
    expect(factory).toHaveBeenCalledTimes(1);
    expect(inner).toHaveBeenCalledTimes(1);
  });

  it("retries lazy initialization after the factory fails", async () => {
    const inner = createCredentialRefreshProvider(source());
    const factory = vi.fn().mockRejectedValueOnce(new Error("import failed")).mockResolvedValueOnce(inner);
    const provider = createLazyCredentialProvider(factory);

    await expect(provider()).rejects.toThrow("import failed");
    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID" });
    expect(factory).toHaveBeenCalledTimes(2);
  });

  it("forwards invalidate after initialization", async () => {
    const inner = createCredentialRefreshProvider(source());
    const provider = createLazyCredentialProvider(async () => inner);
    await provider();

    expect(typeof provider.invalidate).toBe("function");
    provider.invalidate?.({ accessKeyId: "AKID" });
    await provider();

    expect(inner).toBeDefined();
  });
});
