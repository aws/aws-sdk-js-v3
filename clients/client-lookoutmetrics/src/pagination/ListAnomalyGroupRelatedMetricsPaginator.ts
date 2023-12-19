// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAnomalyGroupRelatedMetricsCommand,
  ListAnomalyGroupRelatedMetricsCommandInput,
  ListAnomalyGroupRelatedMetricsCommandOutput,
} from "../commands/ListAnomalyGroupRelatedMetricsCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnomalyGroupRelatedMetrics: (
  config: LookoutMetricsPaginationConfiguration,
  input: ListAnomalyGroupRelatedMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListAnomalyGroupRelatedMetricsCommandOutput> = createPaginator<
  LookoutMetricsPaginationConfiguration,
  ListAnomalyGroupRelatedMetricsCommandInput,
  ListAnomalyGroupRelatedMetricsCommandOutput
>(LookoutMetricsClient, ListAnomalyGroupRelatedMetricsCommand, "NextToken", "NextToken", "MaxResults");
