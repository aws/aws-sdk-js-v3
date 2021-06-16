import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { CredentialProvider, Credentials } from "@aws-sdk/types";
import { readFileSync } from "fs";

import { fromWebToken, FromWebTokenInit } from "./fromWebToken";

const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";

export interface FromTokenFileInit extends Partial<Omit<FromWebTokenInit, "webIdentityToken">> {
  /**
   * File location of where the `OIDC` token is stored.
   */
  webIdentityTokenFile?: string;
}

/**
 * Represents OIDC credentials from a file on disk.
 */
export const fromTokenFile =
  (init: FromTokenFileInit = {}): CredentialProvider =>
  async () => {
    return resolveTokenFile(init);
  };

const resolveTokenFile = (init?: FromTokenFileInit): Promise<Credentials> => {
  const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
  const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
  const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];

  if (!webIdentityTokenFile || !roleArn) {
    throw new CredentialsProviderError("Web identity configuration not specified");
  }

  return fromWebToken({
    ...init,
    webIdentityToken: readFileSync(webIdentityTokenFile, { encoding: "ascii" }),
    roleArn,
    roleSessionName,
  })();
};
