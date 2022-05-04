// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CloudWatch } from "../CloudWatch";
import { CloudWatchClient } from "../CloudWatchClient";

export interface CloudWatchPaginationConfiguration extends PaginationConfiguration {
  client: CloudWatch | CloudWatchClient;
}
