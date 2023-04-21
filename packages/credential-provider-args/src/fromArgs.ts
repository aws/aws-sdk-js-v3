import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";

/**
 * @internal
 */
export type FromArgsInit = {
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  expiry?: string;
}

/**
 * @internal
 *
 * Source AWS credentials from arguments. If either the
 * `accessKeyId` or `secretAccessKey` argument is not
 * set in this process, the provider will return a rejected promise.
 */
export const fromArgs = (init: FromArgsInit): AwsCredentialIdentityProvider => async () => {
  const {accessKeyId, secretAccessKey, sessionToken, expiry} = init;

  if (accessKeyId && secretAccessKey) {
    return {
      accessKeyId,
      secretAccessKey,
      ...(sessionToken && { sessionToken }),
      ...(expiry && { expiration: new Date(expiry) }),
    };
  }

  throw new CredentialsProviderError("Unable to find arguments credentials.");
};
