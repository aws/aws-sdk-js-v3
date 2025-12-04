// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataQualityRuleRecommendationRunsCommand,
  ListDataQualityRuleRecommendationRunsCommandInput,
  ListDataQualityRuleRecommendationRunsCommandOutput,
} from "../commands/ListDataQualityRuleRecommendationRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataQualityRuleRecommendationRuns: (
  config: GluePaginationConfiguration,
  input: ListDataQualityRuleRecommendationRunsCommandInput,
  ...rest: any[]
) => Paginator<ListDataQualityRuleRecommendationRunsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListDataQualityRuleRecommendationRunsCommandInput,
  ListDataQualityRuleRecommendationRunsCommandOutput
>(GlueClient, ListDataQualityRuleRecommendationRunsCommand, "NextToken", "NextToken", "MaxResults");
