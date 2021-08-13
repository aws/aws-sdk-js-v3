import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import * as core from "@aws-sdk/credential-provider-cognito-identity";

export interface FromCognitoIdentityParameters extends Omit<core.FromCognitoIdentityParameters, "client"> {
  client?: CognitoIdentityClient;
}

export type CognitoIdentityCredentialProvider = core.CognitoIdentityCredentialProvider;

export const fromCognitoIdentity = (options: FromCognitoIdentityParameters): CognitoIdentityCredentialProvider =>
  core.fromCognitoIdentity({
    ...options,
    client: options.client ?? new CognitoIdentityClient({}),
  });
