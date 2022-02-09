import { GetRoleCredentialsCommand, GetRoleCredentialsCommandOutput, SSOClient } from "@aws-sdk/client-sso";
import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { getHomeDir } from "@aws-sdk/shared-ini-file-loader";
import { Credentials } from "@aws-sdk/types";
import { createHash } from "crypto";
import { readFileSync } from "fs";
import { join } from "path";

import { FromSSOInit, SsoCredentialsParameters } from "./fromSSO";
import { SSOToken } from "./types";

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
