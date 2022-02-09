import { SSOClient } from "@aws-sdk/client-sso";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { CredentialProvider } from "@aws-sdk/types";
import { getMasterProfileName, parseKnownFiles, SourceProfileInit } from "@aws-sdk/util-credentials";

import { isSsoProfile } from "./isSsoProfile";
import { resolveSSOCredentials } from "./resolveSSOCredentials";
import { validateSsoProfile } from "./validateSsoProfile";

export interface SsoCredentialsParameters {
  /**
   * The URL to the AWS SSO service.
   */
  ssoStartUrl: string;

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
 */

export const fromSSO =
  (init: FromSSOInit & Partial<SsoCredentialsParameters> = {} as any): CredentialProvider =>
  async () => {
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient } = init;
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName) {
      // Load the SSO config from shared AWS config file.
      const profiles = await parseKnownFiles(init);
      const profileName = getMasterProfileName(init);
      const profile = profiles[profileName];
      if (!isSsoProfile(profile)) {
        throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
      }
      const { sso_start_url, sso_account_id, sso_region, sso_role_name } = validateSsoProfile(profile);
      return resolveSSOCredentials({
        ssoStartUrl: sso_start_url,
        ssoAccountId: sso_account_id,
        ssoRegion: sso_region,
        ssoRoleName: sso_role_name,
        ssoClient: ssoClient,
      });
    } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
      throw new CredentialsProviderError(
        'Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl",' +
          ' "ssoAccountId", "ssoRegion", "ssoRoleName"'
      );
    } else {
      return resolveSSOCredentials({ ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient });
    }
  };
