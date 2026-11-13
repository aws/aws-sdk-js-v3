import type { AwsIdentityProperties, RuntimeConfigIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity } from "@smithy/types";

import { createCredentialRefreshProvider } from "./createCredentialRefreshProvider";
import type {
  CredentialRefreshCallOptions,
  CredentialRefreshProvider,
  CredentialRefreshProviderOptions,
} from "./types";

/**
 * Keeps one credential cache per profile name. A provider that reads its profile from the calling
 * client needs this when it's shared by clients with different profiles, so each client gets its
 * own profile's credentials.
 *
 * @internal
 */
export const createProfileKeyedRefreshProvider = <Identity extends AwsCredentialIdentity>(
  resolveProfile: (options?: AwsIdentityProperties) => string,
  source: RuntimeConfigIdentityProvider<Identity>,
  options: CredentialRefreshProviderOptions = {}
): CredentialRefreshProvider<Identity> => {
  const lifecycles = new Map<string, CredentialRefreshProvider<Identity>>();

  const lifecycleFor = (profile: string): CredentialRefreshProvider<Identity> => {
    let lifecycle = lifecycles.get(profile);
    if (!lifecycle) {
      lifecycle = createCredentialRefreshProvider(source, options);
      lifecycles.set(profile, lifecycle);
    }
    return lifecycle;
  };

  const provider = (async (callOptions?: CredentialRefreshCallOptions) =>
    lifecycleFor(resolveProfile(callOptions))(callOptions)) as CredentialRefreshProvider<Identity> & {
    invalidate: CredentialRefreshProvider<Identity>["invalidate"];
    memoized: true;
  };

  // The rejected access key identifies the lifecycle that holds it and the others ignore a key they do not hold.
  provider.invalidate = (rejectedIdentity) => {
    for (const lifecycle of lifecycles.values()) {
      lifecycle.invalidate(rejectedIdentity);
    }
  };
  provider.memoized = true;

  return provider;
};
