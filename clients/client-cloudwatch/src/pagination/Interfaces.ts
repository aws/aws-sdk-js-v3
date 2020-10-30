import { CloudWatch } from "../CloudWatch";
import { CloudWatchClient } from "../CloudWatchClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CloudWatchPaginationConfiguration extends PaginationConfiguration {
  client: CloudWatch | CloudWatchClient;
}
