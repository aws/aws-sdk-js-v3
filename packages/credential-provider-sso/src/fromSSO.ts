import { SSOClient } from "@aws-sdk/client-sso";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import {
  getProfileName,
  loadSsoSessionData,
  parseKnownFiles,
  SourceProfileInit,
} from "@aws-sdk/shared-ini-file-loader";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";

import { isSsoProfile } from "./isSsoProfile";
import { resolveSSOCredentials } from "./resolveSSOCredentials";
import { validateSsoProfile } from "./validateSsoProfile";

export interface SsoCredentialsParameters {
  /**
   * The URL to the AWS SSO service.
   */
  ssoStartUrl: string;

  /**
   * SSO session identifier.
   * Presence implies usage of the SSOTokenProvider.
   */
  ssoSession?: string;

  /**
   * The ID of the AWS account to use for temporary credentials.
   */
  ssoAccountId: string;

  /**
   * The AWS region to use for temporary credentials.
   */
  ssoRegion: string;

  /**
   * The name of the AWS role to assume.
   */
  ssoRoleName: string;
}

export interface FromSSOInit extends SourceProfileInit {
  ssoClient?: SSOClient;
}

/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 *
 * The SSO credential provider must support both
 *
 * 1. the legacy profile format,
 * @example
 * ```
 * [profile sample-profile]
 * sso_account_id = 012345678901
 * sso_region = us-east-1
 * sso_role_name = SampleRole
 * sso_start_url = https://www.....com/start
 * ```
 *
 * 2. and the profile format for SSO Token Providers.
 * @example
 * ```
 * [profile sso-profile]
 * sso_session = dev
 * sso_account_id = 012345678901
 * sso_role_name = SampleRole
 *
 * [sso-session dev]
 * sso_region = us-east-1
 * sso_start_url = https://www.....com/start
 * ```
 */
export const fromSSO =
  (init: FromSSOInit & Partial<SsoCredentialsParameters> = {}): AwsCredentialIdentityProvider =>
  async () => {
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, ssoSession } = init;
    const profileName = getProfileName(init);

    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
      // Load the SSO config from shared AWS config file.
      const profiles = await parseKnownFiles(init);
      const profile = profiles[profileName];

      if (!profile) {
        throw new CredentialsProviderError(`Profile ${profileName} was not found.`);
      }

      if (!isSsoProfile(profile)) {
        throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
      }

      if (profile?.sso_session) {
        const ssoSessions = await loadSsoSessionData(init);
        const session = ssoSessions[profile.sso_session];
        const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
        if (ssoRegion && ssoRegion !== session.sso_region) {
          throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
        }
        if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
          throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
        }
        profile.sso_region = session.sso_region;
        profile.sso_start_url = session.sso_start_url;
      }

      const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile);
      return resolveSSOCredentials({
        ssoStartUrl: sso_start_url,
        ssoSession: sso_session,
        ssoAccountId: sso_account_id,
        ssoRegion: sso_region,
        ssoRoleName: sso_role_name,
        ssoClient: ssoClient,
        profile: profileName,
      });
    } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
      throw new CredentialsProviderError(
        "Incomplete configuration. The fromSSO() argument hash must include " +
          '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"'
      );
    } else {
      return resolveSSOCredentials({
        ssoStartUrl,
        ssoSession,
        ssoAccountId,
        ssoRegion,
        ssoRoleName,
        ssoClient,
        profile: profileName,
      });
    }
  };
