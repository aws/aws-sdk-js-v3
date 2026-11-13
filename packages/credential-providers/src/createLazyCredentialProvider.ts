import type { AwsIdentityProperties, RuntimeConfigIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity } from "@smithy/types";

type ProviderWithRefreshLifecycle<Identity extends AwsCredentialIdentity> = RuntimeConfigIdentityProvider<Identity> & {
  readonly memoized?: boolean;
  invalidate?(rejectedIdentity: Pick<AwsCredentialIdentity, "accessKeyId">): void;
};

/** Lazily creates an SDK credential provider without hiding its refresh lifecycle from the client. */
export const createLazyCredentialProvider = <Identity extends AwsCredentialIdentity>(
  factory: () => Promise<ProviderWithRefreshLifecycle<Identity>>
): ProviderWithRefreshLifecycle<Identity> & { readonly memoized: true } => {
  let resolved: ProviderWithRefreshLifecycle<Identity> | undefined;
  let resolving: Promise<ProviderWithRefreshLifecycle<Identity>> | undefined;

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
