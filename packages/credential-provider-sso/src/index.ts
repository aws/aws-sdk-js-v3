import { GetRoleCredentialsCommand, GetRoleCredentialsCommandOutput, SSOClient } from "@aws-sdk/client-sso";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { getHomeDir, Profile } from "@aws-sdk/shared-ini-file-loader";
import { CredentialProvider, Credentials } from "@aws-sdk/types";
import { getMasterProfileName, parseKnownFiles, SourceProfileInit } from "@aws-sdk/util-credentials";
import { createHash } from "crypto";
import { readFileSync } from "fs";
import { join } from "path";

/**
 * The time window (15 mins) that SDK will treat the SSO token expires in before the defined expiration date in token.
 * This is needed because server side may have invalidated the token before the defined expiration date.
 *
 * @internal
 */
export const EXPIRE_WINDOW_MS = 15 * 60 * 1000;

const SHOULD_FAIL_CREDENTIAL_CHAIN = false;

/**
 * Cached SSO token retrieved from SSO login flow.
 */
interface SSOToken {
  // A base64 encoded string returned by the sso-oidc service.
  accessToken: string;
  // RFC3339 format timestamp
  expiresAt: string;
  region?: string;
  startUrl?: string;
}

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

const resolveSSOCredentials = async ({
  ssoStartUrl,
  ssoAccountId,
  ssoRegion,
  ssoRoleName,
  ssoClient,
}: FromSSOInit & SsoCredentialsParameters): Promise<Credentials> => {
  const hasher = createHash("sha1");
  const cacheName = hasher.update(ssoStartUrl).digest("hex");
  const tokenFile = join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
  let token: SSOToken;
  try {
    token = JSON.parse(readFileSync(tokenFile, { encoding: "utf-8" }));
    if (new Date(token.expiresAt).getTime() - Date.now() <= EXPIRE_WINDOW_MS) {
      throw new Error("SSO token is expired.");
    }
  } catch (e) {
    throw new CredentialsProviderError(
      `The SSO session associated with this profile has expired or is otherwise invalid. To refresh this SSO session ` +
        `run aws sso login with the corresponding profile.`,
      SHOULD_FAIL_CREDENTIAL_CHAIN
    );
  }
  const { accessToken } = token;
  const sso = ssoClient || new SSOClient({ region: ssoRegion });
  let ssoResp: GetRoleCredentialsCommandOutput;
  try {
    ssoResp = await sso.send(
      new GetRoleCredentialsCommand({
        accountId: ssoAccountId,
        roleName: ssoRoleName,
        accessToken,
      })
    );
  } catch (e) {
    throw CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
  }
  const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration } = {} } = ssoResp;
  if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
    throw new CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
  }
  return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration) };
};

/**
 * @internal
 */
export interface SsoProfile extends Profile {
  sso_start_url: string;
  sso_account_id: string;
  sso_region: string;
  sso_role_name: string;
}

/**
 * @internal
 */
export const validateSsoProfile = (profile: Partial<SsoProfile>): SsoProfile => {
  const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
  if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
    throw new CredentialsProviderError(
      `Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", ` +
        `"sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(
          ", "
        )}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
      SHOULD_FAIL_CREDENTIAL_CHAIN
    );
  }
  return profile as SsoProfile;
};

/**
 * @internal
 */
export const isSsoProfile = (arg: Profile): arg is Partial<SsoProfile> =>
  arg &&
  (typeof arg.sso_start_url === "string" ||
    typeof arg.sso_account_id === "string" ||
    typeof arg.sso_region === "string" ||
    typeof arg.sso_role_name === "string");
