// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetRecommendationPreferencesCommand,
  GetRecommendationPreferencesCommandInput,
  GetRecommendationPreferencesCommandOutput,
} from "../commands/GetRecommendationPreferencesCommand";
import { ComputeOptimizerClient } from "../ComputeOptimizerClient";
import { ComputeOptimizerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetRecommendationPreferences: (
  config: ComputeOptimizerPaginationConfiguration,
  input: GetRecommendationPreferencesCommandInput,
  ...rest: any[]
) => Paginator<GetRecommendationPreferencesCommandOutput> = createPaginator<
  ComputeOptimizerPaginationConfiguration,
  GetRecommendationPreferencesCommandInput,
  GetRecommendationPreferencesCommandOutput
>(ComputeOptimizerClient, GetRecommendationPreferencesCommand, "nextToken", "nextToken", "maxResults");
