import { LookoutMetrics } from "../LookoutMetrics";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface LookoutMetricsPaginationConfiguration extends PaginationConfiguration {
  client: LookoutMetrics | LookoutMetricsClient;
}
