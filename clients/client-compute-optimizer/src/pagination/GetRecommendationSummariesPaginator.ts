// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetRecommendationSummariesCommand,
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput,
} from "../commands/GetRecommendationSummariesCommand";
import { ComputeOptimizerClient } from "../ComputeOptimizerClient";
import { ComputeOptimizerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetRecommendationSummaries: (
  config: ComputeOptimizerPaginationConfiguration,
  input: GetRecommendationSummariesCommandInput,
  ...rest: any[]
) => Paginator<GetRecommendationSummariesCommandOutput> = createPaginator<
  ComputeOptimizerPaginationConfiguration,
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput
>(ComputeOptimizerClient, GetRecommendationSummariesCommand, "nextToken", "nextToken", "maxResults");
