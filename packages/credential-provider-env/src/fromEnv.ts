import { setCredentialFeature } from "@aws-sdk/core/client";
import type { AttributedAwsCredentialIdentity, CredentialProviderOptions } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";
import { AwsCredentialIdentityProvider } from "@smithy/types";

export interface FromEnvInit extends CredentialProviderOptions {}

/**
 * @internal
 */
export const ENV_KEY = "AWS_ACCESS_KEY_ID";
/**
 * @internal
 */
export const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
/**
 * @internal
 */
export const ENV_SESSION = "AWS_SESSION_TOKEN";
/**
 * @internal
 */
export const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
/**
 * @internal
 */
export const ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
/**
 * @internal
 */
export const ENV_ACCOUNT_ID = "AWS_ACCOUNT_ID";

/**
 * @internal
 *
 * Source AWS credentials from known environment variables. If either the
 * `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` environment variable is not
 * set in this process, the provider will return a rejected promise.
 */
export const fromEnv =
  (init?: FromEnvInit): AwsCredentialIdentityProvider =>
  async () => {
    init?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
    const accessKeyId: string | undefined = process.env[ENV_KEY];
    const secretAccessKey: string | undefined = process.env[ENV_SECRET];
    const sessionToken: string | undefined = process.env[ENV_SESSION];
    const expiry: string | undefined = process.env[ENV_EXPIRATION];
    const credentialScope: string | undefined = process.env[ENV_CREDENTIAL_SCOPE];
    const accountId: string | undefined = process.env[ENV_ACCOUNT_ID];

    if (accessKeyId && secretAccessKey) {
      const credentials = {
        accessKeyId,
        secretAccessKey,
        ...(sessionToken && { sessionToken }),
        ...(expiry && { expiration: new Date(expiry) }),
        ...(credentialScope && { credentialScope }),
        ...(accountId && { accountId }),
      } as AttributedAwsCredentialIdentity;
      setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS", "g");
      return credentials;
    }

    throw new CredentialsProviderError("Unable to find environment variable credentials.", { logger: init?.logger });
  };
