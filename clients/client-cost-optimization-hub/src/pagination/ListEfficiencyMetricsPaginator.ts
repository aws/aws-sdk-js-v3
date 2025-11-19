// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListEfficiencyMetricsCommand,
  ListEfficiencyMetricsCommandInput,
  ListEfficiencyMetricsCommandOutput,
} from "../commands/ListEfficiencyMetricsCommand";
import { CostOptimizationHubClient } from "../CostOptimizationHubClient";
import { CostOptimizationHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEfficiencyMetrics: (
  config: CostOptimizationHubPaginationConfiguration,
  input: ListEfficiencyMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListEfficiencyMetricsCommandOutput> = createPaginator<
  CostOptimizationHubPaginationConfiguration,
  ListEfficiencyMetricsCommandInput,
  ListEfficiencyMetricsCommandOutput
>(CostOptimizationHubClient, ListEfficiencyMetricsCommand, "nextToken", "nextToken", "maxResults");
