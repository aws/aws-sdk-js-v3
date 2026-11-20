import type { RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { CredentialsProviderError, getProfileName } from "@smithy/core/config";

import type { FromIniInit } from "./fromIni";
import { loadProfiles } from "./loadProfiles";
import {
  isCredentialDaemonProfile,
  isSsoProfileWithoutAccountOrRole,
  resolveCredentialDaemonCredentials,
} from "./resolveCredentialDaemonCredentials";

/**
 * @internal
 */
export type FromCredentialDaemonProfileInit = Pick<
  FromIniInit,
  "profile" | "filepath" | "configFilepath" | "ignoreCache" | "logger" | "credentialDaemon"
>;

/**
 * Gets credentials from the credential daemon for a profile that sets credential_daemon, with the same
 * rules as fromIni.
 * @internal
 */
export const fromCredentialDaemonProfile =
  (init: FromCredentialDaemonProfileInit = {}): RuntimeConfigAwsCredentialIdentityProvider =>
  async ({ callerClientConfig } = {}) => {
    init.logger?.debug("@aws-sdk/credential-provider-ini - fromCredentialDaemonProfile");
    const profileName = getProfileName({ profile: init.profile ?? callerClientConfig?.profile });
    const profile = (await loadProfiles(init))[profileName];
    // An SSO profile with neither sso_account_id nor sso_role_name resolves as if it had no
    // credential_daemon, so this provider doesn't apply to it.
    if (!isCredentialDaemonProfile(profile) || isSsoProfileWithoutAccountOrRole(profile)) {
      throw new CredentialsProviderError(`Profile ${profileName} does not use a credential daemon.`, {
        tryNextLink: true,
        logger: init.logger,
      });
    }
    return resolveCredentialDaemonCredentials(profileName, profile, init);
  };
