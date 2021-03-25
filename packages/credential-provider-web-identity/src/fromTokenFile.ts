import { AssumeRoleWithWebIdentityCommandInput } from "@aws-sdk/client-sts";
import { ProviderError } from "@aws-sdk/property-provider";
import { CredentialProvider, Credentials } from "@aws-sdk/types";
import { readFileSync } from "fs";

const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";

export interface FromTokenFileInit {
  /**
   * File location of where the `OIDC` token is stored.
   */
  webIdentityTokenFile?: string;

  /**
   * The IAM role wanting to be assumed.
   */
  roleArn?: string;

  /**
   * The IAM session name used to distinguish sessions.
   */
  roleSessionName?: string;

  /**
   * A function that assumes a role with web identity and returns a promise fulfilled with
   * credentials for the assumed role.
   *
   * @param sourceCreds The credentials with which to assume a role.
   * @param params
   */
  roleAssumerWithWebIdentity?: (params: AssumeRoleWithWebIdentityCommandInput) => Promise<Credentials>;
}

/**
 * Represents OIDC credentials from a file on disk.
 */
export const fromTokenFile = (init: FromTokenFileInit): CredentialProvider => async () => {
  const { webIdentityTokenFile, roleArn, roleSessionName, roleAssumerWithWebIdentity } = init;

  if (!roleAssumerWithWebIdentity) {
    throw new ProviderError(
      `Role Arn '${roleArn ?? process.env[ENV_ROLE_ARN]}' needs to be assumed with web identity,` +
        ` but no role assumption callback was provided.`,
      false
    );
  }

  return roleAssumerWithWebIdentity({
    WebIdentityToken: readFileSync(webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE]!, { encoding: "ascii" }),
    RoleArn: roleArn ?? process.env[ENV_ROLE_ARN],
    RoleSessionName: roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME] ?? `aws-sdk-js-session-${Date.now()}`,
  });
};
