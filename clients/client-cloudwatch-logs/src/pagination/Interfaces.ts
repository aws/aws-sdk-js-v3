// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CloudWatchLogs } from "../CloudWatchLogs";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";

export interface CloudWatchLogsPaginationConfiguration extends PaginationConfiguration {
  client: CloudWatchLogs | CloudWatchLogsClient;
}
