// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { InternetMonitor } from "../InternetMonitor";
import { InternetMonitorClient } from "../InternetMonitorClient";

export interface InternetMonitorPaginationConfiguration extends PaginationConfiguration {
  client: InternetMonitor | InternetMonitorClient;
}
