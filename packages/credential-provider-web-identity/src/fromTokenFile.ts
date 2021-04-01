import { CredentialProvider } from "@aws-sdk/types";
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
export const fromTokenFile = (init: FromTokenFileInit): CredentialProvider => {
  const { webIdentityTokenFile, roleArn, roleSessionName } = init;

  return fromWebToken({
    ...init,
    webIdentityToken: readFileSync(webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE]!, { encoding: "ascii" }),
    roleArn: roleArn ?? process.env[ENV_ROLE_ARN]!,
    roleSessionName: roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME],
  });
};
