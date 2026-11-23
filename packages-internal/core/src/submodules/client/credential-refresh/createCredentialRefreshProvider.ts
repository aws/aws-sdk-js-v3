import type { RuntimeConfigIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity } from "@smithy/types";

import { CredentialRefreshLifecycle } from "./CredentialRefreshLifecycle";
import type {
  CredentialRefreshCallOptions,
  CredentialRefreshProvider,
  CredentialRefreshProviderOptions,
} from "./types";

/**
 * Wraps a credential source in the credential refresh lifecycle.
 *
 * Advisory window: the refresh runs in the background and callers keep using the cached credentials.
 * After a refresh fails with an error that needs customer action, the next caller waits for the refresh
 * instead, so it gets the error.
 * Mandatory window or expired: callers wait for the refresh.
 *
 * If a refresh fails, the cached credentials are kept and returned, even after they expire.
 * A backoff of 1 to 10 minutes is then set from the credentials remaining lifetime, shorter
 * when expiration is near, and no refresh is attempted until it elapses.
 *
 * @internal
 *
 * @param source - credential source to wrap. Called once per refresh; any request retries happen inside it.
 * @param options - logger for the refresh failure warning.
 */
export const createCredentialRefreshProvider = <Identity extends AwsCredentialIdentity>(
  source: RuntimeConfigIdentityProvider<Identity>,
  options: CredentialRefreshProviderOptions = {}
): CredentialRefreshProvider<Identity> => {
  const lifecycle = new CredentialRefreshLifecycle(source, options.logger);

  const provider = ((callOptions?: CredentialRefreshCallOptions) =>
    lifecycle.getCredentials(callOptions)) as CredentialRefreshProvider<Identity> & {
    invalidate: CredentialRefreshProvider<Identity>["invalidate"];
    memoized: true;
  };

  provider.invalidate = (rejectedIdentity) => lifecycle.invalidate(rejectedIdentity);

  provider.memoized = true;

  return provider;
};
