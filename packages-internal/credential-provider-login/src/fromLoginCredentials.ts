import { setCredentialFeature } from "@aws-sdk/core/client";
import type { AwsIdentityProperties, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";
import { getProfileName, parseKnownFiles } from "@smithy/shared-ini-file-loader";

import { LoginCredentialsFetcher } from "./LoginCredentialsFetcher";
import type { FromLoginCredentialsInit } from "./types";

/**
 * Creates a credential provider that sources credentials from aws login cached tokens
 * @internal
 */
export const fromLoginCredentials =
  (init?: FromLoginCredentialsInit): RuntimeConfigAwsCredentialIdentityProvider =>
  async ({ callerClientConfig }: AwsIdentityProperties = {}) => {
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

    const credentials = await fetcher.loadCredentials();

    return setCredentialFeature(credentials, "CREDENTIALS_LOGIN", "AD");
  };
