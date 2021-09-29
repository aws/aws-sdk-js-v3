import { ChimeSDKIdentity } from "../ChimeSDKIdentity";
import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ChimeSDKIdentityPaginationConfiguration extends PaginationConfiguration {
  client: ChimeSDKIdentity | ChimeSDKIdentityClient;
}
