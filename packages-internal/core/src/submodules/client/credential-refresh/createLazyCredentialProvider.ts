import type { AwsIdentityProperties, RuntimeConfigIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity } from "@smithy/types";

/**
 * A provider that may carry the refresh lifecycle's cache marker and invalidation method.
 * @internal
 */
export type LazyCredentialProviderSource<Identity extends AwsCredentialIdentity = AwsCredentialIdentity> =
  RuntimeConfigIdentityProvider<Identity> & {
    readonly memoized?: boolean;
    invalidate?(rejectedIdentity: Pick<AwsCredentialIdentity, "accessKeyId">): void;
  };

/**
 * Lazily loads a credential provider on first use and reuses it.
 *
 * Callers load their provider implementation with a dynamic import, so they must return a function
 * right away even though the real provider only loads later. Building it on every call would drop
 * the refresh lifecycle's cache, so we build it once. The wrapper is a new function, so it copies
 * the provider's `memoized` and `invalidate` onto itself: `memoized` tells the client not to add a
 * second cache, and `invalidate` lets the signer drop credentials that a service rejected.
 *
 * @internal
 */
export const createLazyCredentialProvider = <Identity extends AwsCredentialIdentity = AwsCredentialIdentity>(
  factory: () => Promise<LazyCredentialProviderSource<Identity>>
): LazyCredentialProviderSource<Identity> & { readonly memoized: true } => {
  let resolved: LazyCredentialProviderSource<Identity> | undefined;
  let resolving: Promise<LazyCredentialProviderSource<Identity>> | undefined;

  const provider = async (options?: AwsIdentityProperties) => {
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
