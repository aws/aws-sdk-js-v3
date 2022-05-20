// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CognitoIdentityProvider } from "../CognitoIdentityProvider";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";

export interface CognitoIdentityProviderPaginationConfiguration extends PaginationConfiguration {
  client: CognitoIdentityProvider | CognitoIdentityProviderClient;
}
