// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ApplicationCostProfiler } from "../ApplicationCostProfiler";
import { ApplicationCostProfilerClient } from "../ApplicationCostProfilerClient";

export interface ApplicationCostProfilerPaginationConfiguration extends PaginationConfiguration {
  client: ApplicationCostProfiler | ApplicationCostProfilerClient;
}
