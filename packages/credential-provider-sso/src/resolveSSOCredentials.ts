import { GetRoleCredentialsCommand, GetRoleCredentialsCommandOutput, SSOClient } from "@aws-sdk/client-sso";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { getSSOTokenFromFile, SSOToken } from "@aws-sdk/shared-ini-file-loader";
import { Credentials } from "@aws-sdk/types";

import { FromSSOInit, SsoCredentialsParameters } from "./fromSSO";

/**
 * The time window (15 mins) that SDK will treat the SSO token expires in before the defined expiration date in token.
 * This is needed because server side may have invalidated the token before the defined expiration date.
 *
 * @internal
 */
const EXPIRE_WINDOW_MS = 15 * 60 * 1000;

const SHOULD_FAIL_CREDENTIAL_CHAIN = false;

export const resolveSSOCredentials = async ({
  ssoStartUrl,
  ssoAccountId,
  ssoRegion,
  ssoRoleName,
  ssoClient,
}: FromSSOInit & SsoCredentialsParameters): Promise<Credentials> => {
  let token: SSOToken;
  const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
  try {
    token = await getSSOTokenFromFile(ssoStartUrl);
  } catch (e) {
    throw new CredentialsProviderError(
      `The SSO session associated with this profile is invalid. ${refreshMessage}`,
      SHOULD_FAIL_CREDENTIAL_CHAIN
    );
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
