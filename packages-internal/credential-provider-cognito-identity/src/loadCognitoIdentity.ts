import {
  CognitoIdentityClient,
  GetCredentialsForIdentityCommand,
  GetIdCommand,
} from "@aws-sdk/nested-clients/cognito-identity";

// This file must be loaded dynamically.
export { CognitoIdentityClient, GetCredentialsForIdentityCommand, GetIdCommand };
export type { CognitoIdentityClientConfig } from "@aws-sdk/nested-clients/cognito-identity";
