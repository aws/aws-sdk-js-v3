import { CloudTrail } from "../CloudTrail";
import { CloudTrailClient } from "../CloudTrailClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CloudTrailPaginationConfiguration extends PaginationConfiguration {
  client: CloudTrail | CloudTrailClient;
}
