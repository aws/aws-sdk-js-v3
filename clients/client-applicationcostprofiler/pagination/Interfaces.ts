import { ApplicationCostProfiler } from "../ApplicationCostProfiler";
import { ApplicationCostProfilerClient } from "../ApplicationCostProfilerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ApplicationCostProfilerPaginationConfiguration extends PaginationConfiguration {
  client: ApplicationCostProfiler | ApplicationCostProfilerClient;
}
