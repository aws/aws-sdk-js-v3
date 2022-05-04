// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ResourceGroupsTaggingAPI } from "../ResourceGroupsTaggingAPI";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";

export interface ResourceGroupsTaggingAPIPaginationConfiguration extends PaginationConfiguration {
  client: ResourceGroupsTaggingAPI | ResourceGroupsTaggingAPIClient;
}
