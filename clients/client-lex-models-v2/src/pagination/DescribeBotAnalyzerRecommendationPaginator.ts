// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeBotAnalyzerRecommendationCommand,
  DescribeBotAnalyzerRecommendationCommandInput,
  DescribeBotAnalyzerRecommendationCommandOutput,
} from "../commands/DescribeBotAnalyzerRecommendationCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import type { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBotAnalyzerRecommendation: (
  config: LexModelsV2PaginationConfiguration,
  input: DescribeBotAnalyzerRecommendationCommandInput,
  ...rest: any[]
) => Paginator<DescribeBotAnalyzerRecommendationCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  DescribeBotAnalyzerRecommendationCommandInput,
  DescribeBotAnalyzerRecommendationCommandOutput
>(LexModelsV2Client, DescribeBotAnalyzerRecommendationCommand, "nextToken", "nextToken", "maxResults");
