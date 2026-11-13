import { createProfileKeyedRefreshProvider, setCredentialFeature } from "@aws-sdk/core/client";
import type { AwsIdentityProperties, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { CredentialsProviderError, getProfileName, parseKnownFiles } from "@smithy/core/config";

import { LoginCredentialsFetcher } from "./LoginCredentialsFetcher";
import type { FromLoginCredentialsInit } from "./types";

/**
 * Creates a credential provider that sources credentials from aws login cached tokens
 * @internal
 */
export const fromLoginCredentials = (init?: FromLoginCredentialsInit): RuntimeConfigAwsCredentialIdentityProvider =>
  createProfileKeyedRefreshProvider(
    // One lifecycle per profile, so clients with different profiles never share credentials.
    ({ callerClientConfig }: AwsIdentityProperties = {}) =>
      getProfileName({ profile: init?.profile ?? callerClientConfig?.profile }),
    async ({
      callerClientConfig,
      rejectedAccessKeyId,
    }: AwsIdentityProperties & { rejectedAccessKeyId?: string } = {}) => {
      init?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");

      // Load profiles and check for login_session
      const profiles = await parseKnownFiles(init || {});

      const profileName = getProfileName({
        profile: init?.profile ?? callerClientConfig?.profile,
      });

      const profile = profiles[profileName];
      if (!profile?.login_session) {
        // This is not a terminal error, if login_session is not present it would move to next provider in the chain.
        throw new CredentialsProviderError(`Profile ${profileName} does not contain login_session.`, {
          tryNextLink: true,
          logger: init?.logger,
        });
      }

      const fetcher = new LoginCredentialsFetcher(profile, init, callerClientConfig);

      // Set by the refresh lifecycle after a service rejected these credentials.
      const credentials = await fetcher.loadCredentials(rejectedAccessKeyId);

      return setCredentialFeature(credentials, "CREDENTIALS_LOGIN", "AD");
    },
    { logger: init?.logger }
  );
