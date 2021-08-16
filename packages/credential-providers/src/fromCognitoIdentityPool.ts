import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {
  CognitoIdentityCredentialProvider,
  fromCognitoIdentityPool as _fromCognitoIdentityPool,
  FromCognitoIdentityPoolParameters as _FromCognitoIdentityPoolParameters,
} from "@aws-sdk/credential-provider-cognito-identity";

export interface FromCognitoIdentityPoolParameters extends Omit<_FromCognitoIdentityPoolParameters, "client"> {
  client?: CognitoIdentityClient;
}

/**
 * Retrieves or generates a unique identifier using Amazon Cognito's `GetId`
 * operation, then generates temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from `GetId` are cached internally, but results from
 * `GetCredentialsForIdentity` are not.
 */
export const fromCognitoIdentityPool = (
  options: FromCognitoIdentityPoolParameters
): CognitoIdentityCredentialProvider =>
  _fromCognitoIdentityPool({
    ...options,
    client: options.client ?? new CognitoIdentityClient({}),
  });
