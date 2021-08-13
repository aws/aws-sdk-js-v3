import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import * as core from "@aws-sdk/credential-provider-cognito-identity";

import { CognitoIdentityCredentialProvider } from "./fromCognitoIdentity";

export interface FromCognitoIdentityPoolParameters extends Omit<core.FromCognitoIdentityPoolParameters, "client"> {
  client?: CognitoIdentityClient;
}

export const fromCognitoIdentityPool = (
  options: FromCognitoIdentityPoolParameters
): CognitoIdentityCredentialProvider =>
  core.fromCognitoIdentityPool({
    ...options,
    client: options.client ?? new CognitoIdentityClient({}),
  });
