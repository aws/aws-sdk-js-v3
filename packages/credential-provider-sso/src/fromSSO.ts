import type { CredentialProviderOptions, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";
import { getProfileName, loadSsoSessionData, parseKnownFiles, SourceProfileInit } from "@smithy/shared-ini-file-loader";

import { isSsoProfile } from "./isSsoProfile";
import type { SSOClient, SSOClientConfig } from "./loadSso";
import { resolveSSOCredentials } from "./resolveSSOCredentials";
import { validateSsoProfile } from "./validateSsoProfile";

/**
 * @internal
 */
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

/**
 * @internal
 */
export interface FromSSOInit extends SourceProfileInit, CredentialProviderOptions {
  ssoClient?: SSOClient;
  clientConfig?: SSOClientConfig;
}

/**
 * @internal
 *
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
  (init: FromSSOInit & Partial<SsoCredentialsParameters> = {}): RuntimeConfigAwsCredentialIdentityProvider =>
  async ({ callerClientConfig } = {}) => {
    init.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
    const { ssoClient } = init;
    const profileName = getProfileName({
      profile: init.profile ?? callerClientConfig?.profile,
    });

    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
      // Load the SSO config from shared AWS config file.
      const profiles = await parseKnownFiles(init);
      const profile = profiles[profileName];

      if (!profile) {
        throw new CredentialsProviderError(`Profile ${profileName} was not found.`, { logger: init.logger });
      }

      if (!isSsoProfile(profile)) {
        throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`, {
          logger: init.logger,
        });
      }

      if (profile?.sso_session) {
        const ssoSessions = await loadSsoSessionData(init);
        const session = ssoSessions[profile.sso_session];
        const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
        if (ssoRegion && ssoRegion !== session.sso_region) {
          throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, {
            tryNextLink: false,
            logger: init.logger,
          });
        }
        if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
          throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, {
            tryNextLink: false,
            logger: init.logger,
          });
        }
        profile.sso_region = session.sso_region;
        profile.sso_start_url = session.sso_start_url;
      }

      const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(
        profile,
        init.logger
      );
      return resolveSSOCredentials({
        ssoStartUrl: sso_start_url,
        ssoSession: sso_session,
        ssoAccountId: sso_account_id,
        ssoRegion: sso_region,
        ssoRoleName: sso_role_name,
        ssoClient: ssoClient,
        clientConfig: init.clientConfig,
        parentClientConfig: init.parentClientConfig,
        profile: profileName,

        filepath: init.filepath,
        configFilepath: init.configFilepath,
        ignoreCache: init.ignoreCache,
        logger: init.logger,
      });
    } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
      throw new CredentialsProviderError(
        "Incomplete configuration. The fromSSO() argument hash must include " +
          '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"',
        { tryNextLink: false, logger: init.logger }
      );
    } else {
      return resolveSSOCredentials({
        ssoStartUrl,
        ssoSession,
        ssoAccountId,
        ssoRegion,
        ssoRoleName,
        ssoClient,
        clientConfig: init.clientConfig,
        parentClientConfig: init.parentClientConfig,
        profile: profileName,

        filepath: init.filepath,
        configFilepath: init.configFilepath,
        ignoreCache: init.ignoreCache,
        logger: init.logger,
      });
    }
  };
