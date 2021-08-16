import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {
  CognitoIdentityCredentialProvider as _CognitoIdentityCredentialProvider,
  fromCognitoIdentity as _fromCognitoIdentity,
  FromCognitoIdentityParameters as _FromCognitoIdentityParameters,
} from "@aws-sdk/credential-provider-cognito-identity";

export interface FromCognitoIdentityParameters extends Omit<_FromCognitoIdentityParameters, "client"> {
  client?: CognitoIdentityClient;
}

export type CognitoIdentityCredentialProvider = _CognitoIdentityCredentialProvider;

/**
 * Retrieves temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from this function call are not cached internally.
 */
export const fromCognitoIdentity = (options: FromCognitoIdentityParameters): CognitoIdentityCredentialProvider =>
  _fromCognitoIdentity({
    ...options,
    client: options.client ?? new CognitoIdentityClient({}),
  });
