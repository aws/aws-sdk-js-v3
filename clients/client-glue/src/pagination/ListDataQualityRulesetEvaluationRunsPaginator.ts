// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataQualityRulesetEvaluationRunsCommand,
  ListDataQualityRulesetEvaluationRunsCommandInput,
  ListDataQualityRulesetEvaluationRunsCommandOutput,
} from "../commands/ListDataQualityRulesetEvaluationRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataQualityRulesetEvaluationRuns: (
  config: GluePaginationConfiguration,
  input: ListDataQualityRulesetEvaluationRunsCommandInput,
  ...rest: any[]
) => Paginator<ListDataQualityRulesetEvaluationRunsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListDataQualityRulesetEvaluationRunsCommandInput,
  ListDataQualityRulesetEvaluationRunsCommandOutput
>(GlueClient, ListDataQualityRulesetEvaluationRunsCommand, "NextToken", "NextToken", "MaxResults");
