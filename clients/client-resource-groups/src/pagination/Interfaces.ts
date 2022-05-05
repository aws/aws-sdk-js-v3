// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ResourceGroups } from "../ResourceGroups";
import { ResourceGroupsClient } from "../ResourceGroupsClient";

export interface ResourceGroupsPaginationConfiguration extends PaginationConfiguration {
  client: ResourceGroups | ResourceGroupsClient;
}
