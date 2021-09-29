import { CognitoIdentityProvider } from "../CognitoIdentityProvider";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CognitoIdentityProviderPaginationConfiguration extends PaginationConfiguration {
  client: CognitoIdentityProvider | CognitoIdentityProviderClient;
}
