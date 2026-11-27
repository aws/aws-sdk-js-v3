import type { AwsIdentityProperties, RuntimeConfigIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity } from "@smithy/types";

/**
 * A provider that may carry the refresh lifecycle's cache marker and invalidation method.
 * @internal
 */
export type MemoizedFactoryProvider<Identity extends AwsCredentialIdentity = AwsCredentialIdentity> =
  RuntimeConfigIdentityProvider<Identity> & {
    readonly memoized?: boolean;
    invalidate?(rejectedIdentity: Pick<AwsCredentialIdentity, "accessKeyId">): void;
  };

/**
 * Calls a provider factory on first use and reuses the provider it returns.
 *
 * Callers pass a lazy factory that loads their provider implementation with a dynamic import, so they
 * must return a function right away even though the real provider only loads later. Building it on every
 * call would drop the refresh lifecycle's cache, so the factory is called once. The wrapper is a new
 * function, so it copies the provider's `memoized` and `invalidate` onto itself: `memoized` tells the
 * client not to add a second cache, and `invalidate` lets the signer drop credentials that a service
 * rejected.
 *
 * @internal
 */
export const memoizeFactory = <Identity extends AwsCredentialIdentity = AwsCredentialIdentity>(
  factory: () => Promise<MemoizedFactoryProvider<Identity>>
): MemoizedFactoryProvider<Identity> & { readonly memoized: true } => {
  let resolved: MemoizedFactoryProvider<Identity> | undefined;
  let resolving: Promise<MemoizedFactoryProvider<Identity>> | undefined;

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
