import { ResourceGroups } from "../ResourceGroups";
import { ResourceGroupsClient } from "../ResourceGroupsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ResourceGroupsPaginationConfiguration extends PaginationConfiguration {
  client: ResourceGroups | ResourceGroupsClient;
}
