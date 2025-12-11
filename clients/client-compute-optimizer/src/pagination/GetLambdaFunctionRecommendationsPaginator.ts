// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetLambdaFunctionRecommendationsCommand,
  GetLambdaFunctionRecommendationsCommandInput,
  GetLambdaFunctionRecommendationsCommandOutput,
} from "../commands/GetLambdaFunctionRecommendationsCommand";
import { ComputeOptimizerClient } from "../ComputeOptimizerClient";
import { ComputeOptimizerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetLambdaFunctionRecommendations: (
  config: ComputeOptimizerPaginationConfiguration,
  input: GetLambdaFunctionRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<GetLambdaFunctionRecommendationsCommandOutput> = createPaginator<
  ComputeOptimizerPaginationConfiguration,
  GetLambdaFunctionRecommendationsCommandInput,
  GetLambdaFunctionRecommendationsCommandOutput
>(ComputeOptimizerClient, GetLambdaFunctionRecommendationsCommand, "nextToken", "nextToken", "maxResults");
