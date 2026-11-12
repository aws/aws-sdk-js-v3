import type {
  AwsCredentialIdentity,
  AwsIdentityProperties,
  RuntimeConfigAwsCredentialIdentityProvider,
} from "@aws-sdk/types";

/**
 * Memoized provider chain for AWS credentials.
 *
 * Each provider owns its refresh policy. Providers covered by the credential refresh spec arrive
 * wrapped in `createCredentialRefreshProvider`; all other providers retain the previous cache.
 * The chain remembers the first provider that succeeds and delegates later calls to it.
 *
 * @public
 */
export interface MemoizedRuntimeConfigAwsCredentialIdentityProvider {
  (options?: AwsIdentityProperties & { forceRefresh?: boolean }): Promise<AwsCredentialIdentity>;
  readonly memoized: true;
  invalidate?(rejectedIdentity: Pick<AwsCredentialIdentity, "accessKeyId">): void;
}

type ProviderWithLifecycle = RuntimeConfigAwsCredentialIdentityProvider &
  Partial<Pick<MemoizedRuntimeConfigAwsCredentialIdentityProvider, "memoized" | "invalidate">>;

/**
 * Lazily creates a provider while preserving its cache marker and invalidation method.
 * @internal
 */
export const createLazyCredentialProvider = (
  factory: () => Promise<ProviderWithLifecycle>
): MemoizedRuntimeConfigAwsCredentialIdentityProvider => {
  let resolved: ProviderWithLifecycle | undefined;
  let resolving: Promise<ProviderWithLifecycle> | undefined;

  const provider = async (options?: AwsIdentityProperties & { forceRefresh?: boolean }) => {
    if (!resolved) {
      const attempt = (resolving ??= factory());
      try {
        resolved = await attempt;
      } finally {
        // A late waiter on a failed attempt must not clear a retry another caller has started.
        if (resolving === attempt) {
          resolving = undefined;
        }
      }
    }
    return resolved(options);
  };

  provider.memoized = true as const;
  Object.defineProperty(provider, "invalidate", {
    get: () => resolved?.invalidate?.bind(resolved),
  });
  return provider;
};

/**
 * Selects one credential provider. Lifecycle-wrapped providers keep their own cache; Process,
 * static, and other out-of-scope providers use the previous JavaScript cache behavior.
 *
 * @internal
 */
export function memoizeChain(
  providers: ProviderWithLifecycle[],
  treatAsExpired: (resolved: AwsCredentialIdentity) => boolean
): MemoizedRuntimeConfigAwsCredentialIdentityProvider {
  let selected: ProviderWithLifecycle | undefined;
  let selecting: Promise<AwsCredentialIdentity> | undefined;

  const select = async (options?: AwsIdentityProperties & { forceRefresh?: boolean }) => {
    const result = await selectCredentialProvider(providers, options);
    if (typeof result.provider.invalidate === "function") {
      selected = result.provider;
    } else if (!selected) {
      // Preserve the old default-chain behavior for Process and other out-of-scope providers:
      // their next refresh re-runs the full chain rather than pinning one provider forever.
      const legacySource: RuntimeConfigAwsCredentialIdentityProvider = async (refreshOptions) => {
        const next = await selectCredentialProvider(providers, refreshOptions);
        if (typeof next.provider.invalidate === "function") {
          selected = next.provider;
        }
        return next.credentials;
      };
      selected = memoizeLegacyProvider(legacySource, treatAsExpired, result.credentials);
    }
    return result.credentials;
  };

  const provider = async (options?: AwsIdentityProperties & { forceRefresh?: boolean }) => {
    const pinned = selected;
    if (pinned) {
      try {
        return await pinned(options);
      } catch (err) {
        // An error that allows the next link moves on through the chain, as it did when every
        // refresh re-ran the full chain. Marking an error non-recoverable doesn't change this.
        if (!err?.tryNextLink || typeof pinned.invalidate !== "function") {
          throw err;
        }
        if (selected === pinned) {
          selected = undefined;
        }
      }
    }
    if (selected) {
      return selected(options);
    }
    const attempt = (selecting ??= select(options));
    try {
      return await attempt;
    } finally {
      // A late waiter on a failed attempt must not clear a retry another caller has started.
      if (selecting === attempt) {
        selecting = undefined;
      }
    }
  };

  provider.memoized = true as const;
  Object.defineProperty(provider, "invalidate", {
    get: () => selected?.invalidate?.bind(selected),
  });
  return provider;
}

const selectCredentialProvider = async (
  providers: ProviderWithLifecycle[],
  options?: AwsIdentityProperties & { forceRefresh?: boolean }
): Promise<{ credentials: AwsCredentialIdentity; provider: ProviderWithLifecycle }> => {
  let lastProviderError: Error | undefined;
  for (const provider of providers) {
    try {
      return { credentials: await provider(options), provider };
    } catch (err) {
      lastProviderError = err;
      if (err?.tryNextLink) {
        continue;
      }
      throw err;
    }
  }
  throw lastProviderError;
};

/** Existing cache behavior for providers outside the credential refresh spec. */
const memoizeLegacyProvider = (
  source: RuntimeConfigAwsCredentialIdentityProvider,
  treatAsExpired: (resolved: AwsCredentialIdentity) => boolean,
  initialCredentials?: AwsCredentialIdentity
): ProviderWithLifecycle => {
  let activeLock: Promise<void> | undefined;
  let passiveLock: Promise<void> | undefined;
  let forceRefreshLock: Promise<void> | undefined;
  let credentials = initialCredentials;

  const provider = async (options?: AwsIdentityProperties & { forceRefresh?: boolean }) => {
    if (options?.forceRefresh) {
      if (!forceRefreshLock) {
        forceRefreshLock = source(options)
          .then((resolved) => {
            credentials = resolved;
          })
          .finally(() => {
            forceRefreshLock = undefined;
          });
      }
      await forceRefreshLock;
      return credentials!;
    }
    if (credentials?.expiration && credentials.expiration.getTime() < Date.now()) {
      credentials = undefined;
    }
    if (activeLock) {
      await activeLock;
    } else if (!credentials || treatAsExpired(credentials)) {
      if (credentials) {
        passiveLock ??= source(options)
          .then((resolved) => {
            credentials = resolved;
          })
          .catch(() => {
            // The cached credentials are still valid. The next call retries after the lock is released.
          })
          .finally(() => {
            passiveLock = undefined;
          });
      } else {
        activeLock = source(options)
          .then((resolved) => {
            credentials = resolved;
          })
          .finally(() => {
            activeLock = undefined;
          });
        return provider(options);
      }
    }
    return credentials!;
  };

  return provider;
};
