import { GetRoleCredentialsCommand, GetRoleCredentialsCommandOutput, SSOClient } from "@aws-sdk/client-sso";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { getSSOTokenFromFile, SSOToken } from "@aws-sdk/shared-ini-file-loader";
import { fromSso as getSsoTokenProvider } from "@aws-sdk/token-providers";
import { AwsCredentialIdentity } from "@aws-sdk/types";

import { FromSSOInit, SsoCredentialsParameters } from "./fromSSO";

/**
 * The time window (15 mins) that SDK will treat the SSO token expires in before the defined expiration date in token.
 * This is needed because server side may have invalidated the token before the defined expiration date.
 *
 * @private
 */
const EXPIRE_WINDOW_MS = 15 * 60 * 1000;

const SHOULD_FAIL_CREDENTIAL_CHAIN = false;

/**
 * @private
 */
export const resolveSSOCredentials = async ({
  ssoStartUrl,
  ssoSession,
  ssoAccountId,
  ssoRegion,
  ssoRoleName,
  ssoClient,
  profile,
}: FromSSOInit & SsoCredentialsParameters): Promise<AwsCredentialIdentity> => {
  let token: SSOToken;
  const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;

  if (ssoSession) {
    try {
      const _token = await getSsoTokenProvider({ profile })();
      token = {
        accessToken: _token.token,
        expiresAt: new Date(_token.expiration!).toISOString(),
      };
    } catch (e) {
      throw new CredentialsProviderError(e.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
  } else {
    try {
      token = await getSSOTokenFromFile(ssoStartUrl);
    } catch (e) {
      throw new CredentialsProviderError(
        `The SSO session associated with this profile is invalid. ${refreshMessage}`,
        SHOULD_FAIL_CREDENTIAL_CHAIN
      );
    }
  }

  if (new Date(token.expiresAt).getTime() - Date.now() <= EXPIRE_WINDOW_MS) {
    throw new CredentialsProviderError(
      `The SSO session associated with this profile has expired. ${refreshMessage}`,
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
