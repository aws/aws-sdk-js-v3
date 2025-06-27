// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  GetFindingRecommendationCommand,
  GetFindingRecommendationCommandInput,
  GetFindingRecommendationCommandOutput,
} from "../commands/GetFindingRecommendationCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFindingRecommendation: (
  config: AccessAnalyzerPaginationConfiguration,
  input: GetFindingRecommendationCommandInput,
  ...rest: any[]
) => Paginator<GetFindingRecommendationCommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  GetFindingRecommendationCommandInput,
  GetFindingRecommendationCommandOutput
>(AccessAnalyzerClient, GetFindingRecommendationCommand, "nextToken", "nextToken", "maxResults");
