import { ResourceGroupsTaggingAPI } from "../ResourceGroupsTaggingAPI";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ResourceGroupsTaggingAPIPaginationConfiguration extends PaginationConfiguration {
  client: ResourceGroupsTaggingAPI | ResourceGroupsTaggingAPIClient;
}
