import { GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity";
import { CredentialsProviderError } from "@smithy/property-provider";
import { AwsCredentialIdentity, Provider } from "@smithy/types";

import { CognitoProviderParameters } from "./CognitoProviderParameters";
import { resolveLogins } from "./resolveLogins";

/**
 * @internal
 */
export interface CognitoIdentityCredentials extends AwsCredentialIdentity {
  /**
   * The Cognito ID returned by the last call to AWS.CognitoIdentity.getOpenIdToken().
   */
  identityId: string;
}

/**
 * @internal
 */
export type CognitoIdentityCredentialProvider = Provider<CognitoIdentityCredentials>;

/**
 * @internal
 *
 * Retrieves temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from this function call are not cached internally.
 */
export function fromCognitoIdentity(parameters: FromCognitoIdentityParameters): CognitoIdentityCredentialProvider {
  return async (): Promise<CognitoIdentityCredentials> => {
    const {
      Credentials: {
        AccessKeyId = throwOnMissingAccessKeyId(),
        Expiration,
        SecretKey = throwOnMissingSecretKey(),
        SessionToken,
      } = throwOnMissingCredentials(),
    } = await parameters.client.send(
      new GetCredentialsForIdentityCommand({
        CustomRoleArn: parameters.customRoleArn,
        IdentityId: parameters.identityId,
        Logins: parameters.logins ? await resolveLogins(parameters.logins) : undefined,
      })
    );

    return {
      identityId: parameters.identityId,
      accessKeyId: AccessKeyId,
      secretAccessKey: SecretKey,
      sessionToken: SessionToken,
      expiration: Expiration,
    };
  };
}

/**
 * @internal
 */
export interface FromCognitoIdentityParameters extends CognitoProviderParameters {
  /**
   * The unique identifier for the identity against which credentials will be
   * issued.
   */
  identityId: string;
}

function throwOnMissingAccessKeyId(): never {
  throw new CredentialsProviderError("Response from Amazon Cognito contained no access key ID");
}

function throwOnMissingCredentials(): never {
  throw new CredentialsProviderError("Response from Amazon Cognito contained no credentials");
}

function throwOnMissingSecretKey(): never {
  throw new CredentialsProviderError("Response from Amazon Cognito contained no secret key");
}
