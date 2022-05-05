// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { LookoutMetrics } from "../LookoutMetrics";
import { LookoutMetricsClient } from "../LookoutMetricsClient";

export interface LookoutMetricsPaginationConfiguration extends PaginationConfiguration {
  client: LookoutMetrics | LookoutMetricsClient;
}
