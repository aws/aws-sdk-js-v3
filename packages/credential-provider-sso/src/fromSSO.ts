import { SSOClient } from "@aws-sdk/client-sso";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { getProfileName, parseKnownFiles, SourceProfileInit } from "@aws-sdk/shared-ini-file-loader";
import { CredentialProvider } from "@aws-sdk/types";

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
  (init: FromSSOInit & Partial<SsoCredentialsParameters> = {}): CredentialProvider =>
  async () => {
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, ssoSession } = init;
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
      // Load the SSO config from shared AWS config file.
      const profiles = await parseKnownFiles(init);
      const profileName = getProfileName(init);
      const profile = profiles[profileName];

      // TODO(sso): merge [sso-session X] data into the profile if sso_session exists in it.
      // TODO(sso): if the sso profile and the sso-session both have region and start URL,
      // TODO(sso):    they must match or an error shall be thrown.

      if (!isSsoProfile(profile)) {
        throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
      }

      const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile);
      return resolveSSOCredentials({
        ssoStartUrl: sso_start_url,
        ssoSession: sso_session,
        ssoAccountId: sso_account_id,
        ssoRegion: sso_region,
        ssoRoleName: sso_role_name,
        ssoClient: ssoClient,
      });
    } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName || !ssoSession) {
      throw new CredentialsProviderError(
        'Incomplete configuration. The fromSSO() argument hash must include "ssoAccountId",' +
          ' "ssoRegion", "ssoRoleName", and one of "ssoStartUrl" or "ssoSession".'
      );
    } else {
      return resolveSSOCredentials({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient });
    }
  };
