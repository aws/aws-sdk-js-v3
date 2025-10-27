import type {
  AwsCredentialIdentity,
  AwsIdentityProperties,
  RuntimeConfigAwsCredentialIdentityProvider,
} from "@aws-sdk/types";

/**
 * Memoized provider chain for AWS credentials.
 * The options are only reevaluated if forceRefresh=true is passed or a natural
 * refresh occurs.
 *
 * @public
 */
export interface MemoizedRuntimeConfigAwsCredentialIdentityProvider {
  (options?: AwsIdentityProperties & { forceRefresh?: boolean }): Promise<AwsCredentialIdentity>;
}

/**
 * @internal
 */
export function memoizeChain(
  providers: RuntimeConfigAwsCredentialIdentityProvider[],
  treatAsExpired: (resolved: AwsCredentialIdentity) => boolean
): MemoizedRuntimeConfigAwsCredentialIdentityProvider {
  const chain = internalCreateChain(providers) as RuntimeConfigAwsCredentialIdentityProvider;

  // exists when fetching credentials and credentials have expired or don't exist.
  let activeLock: Promise<void> | undefined;
  // active when fetching credentials and valid credentials still exist.
  let passiveLock: Promise<void> | undefined;
  let credentials: AwsCredentialIdentity | undefined;

  const provider = async (options?: AwsIdentityProperties & { forceRefresh?: boolean }) => {
    if (activeLock) {
      await activeLock;
    } else if (!credentials || treatAsExpired?.(credentials!)) {
      if (credentials) {
        if (!passiveLock) {
          passiveLock = chain(options).then((c) => {
            credentials = c;
            passiveLock = undefined;
          });
        }
      } else {
        activeLock = chain(options).then((c) => {
          credentials = c;
          activeLock = undefined;
        });
        return provider(options);
      }
    }
    return credentials!;
  };

  return provider;
}

export const internalCreateChain =
  (providers: RuntimeConfigAwsCredentialIdentityProvider[]): RuntimeConfigAwsCredentialIdentityProvider =>
  async (awsIdentityProperties?: AwsIdentityProperties) => {
    let lastProviderError: Error | undefined;
    for (const provider of providers) {
      try {
        return await provider(awsIdentityProperties);
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
