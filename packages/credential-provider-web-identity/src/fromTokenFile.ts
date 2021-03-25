import { ProviderError } from "@aws-sdk/property-provider";
import { CredentialProvider, Credentials } from "@aws-sdk/types";
import { readFileSync } from "fs";

const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";

export interface AssumeRoleWithWebIdentityParams {
  /**
   * <p>The Amazon Resource Name (ARN) of the role that the caller is assuming.</p>
   */
  RoleArn: string;
  /**
   * <p>An identifier for the assumed role session. Typically, you pass the name or identifier
   *          that is associated with the user who is using your application. That way, the temporary
   *          security credentials that your application will use are associated with that user. This
   *          session name is included as part of the ARN and assumed role ID in the
   *             <code>AssumedRoleUser</code> response element.</p>
   *          <p>The regex used to validate this parameter is a string of characters
   *     consisting of upper- and lower-case alphanumeric characters with no spaces. You can
   *     also include underscores or any of the following characters: =,.@-</p>
   */
  RoleSessionName: string;
  /**
   * <p>The OAuth 2.0 access token or OpenID Connect ID token that is provided by the identity
   *          provider. Your application must get this token by authenticating the user who is using your
   *          application with a web identity provider before the application makes an
   *             <code>AssumeRoleWithWebIdentity</code> call. </p>
   */
  WebIdentityToken: string;
}
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
  roleAssumerWithWebIdentity?: (params: AssumeRoleWithWebIdentityParams) => Promise<Credentials>;
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
    RoleArn: roleArn ?? process.env[ENV_ROLE_ARN]!,
    RoleSessionName: roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME] ?? `aws-sdk-js-session-${Date.now()}`,
  });
};
