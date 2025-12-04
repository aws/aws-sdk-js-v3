// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendationSummariesCommand,
  ListRecommendationSummariesCommandInput,
  ListRecommendationSummariesCommandOutput,
} from "../commands/ListRecommendationSummariesCommand";
import { CostOptimizationHubClient } from "../CostOptimizationHubClient";
import { CostOptimizationHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendationSummaries: (
  config: CostOptimizationHubPaginationConfiguration,
  input: ListRecommendationSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendationSummariesCommandOutput> = createPaginator<
  CostOptimizationHubPaginationConfiguration,
  ListRecommendationSummariesCommandInput,
  ListRecommendationSummariesCommandOutput
>(CostOptimizationHubClient, ListRecommendationSummariesCommand, "nextToken", "nextToken", "maxResults");
