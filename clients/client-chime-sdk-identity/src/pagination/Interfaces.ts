// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ChimeSDKIdentity } from "../ChimeSDKIdentity";
import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";

export interface ChimeSDKIdentityPaginationConfiguration extends PaginationConfiguration {
  client: ChimeSDKIdentity | ChimeSDKIdentityClient;
}
