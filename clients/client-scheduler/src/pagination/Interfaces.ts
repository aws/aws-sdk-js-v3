// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Scheduler } from "../Scheduler";
import { SchedulerClient } from "../SchedulerClient";

export interface SchedulerPaginationConfiguration extends PaginationConfiguration {
  client: Scheduler | SchedulerClient;
}
