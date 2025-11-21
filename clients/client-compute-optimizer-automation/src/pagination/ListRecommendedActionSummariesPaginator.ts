// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListRecommendedActionSummariesCommand,
  ListRecommendedActionSummariesCommandInput,
  ListRecommendedActionSummariesCommandOutput,
} from "../commands/ListRecommendedActionSummariesCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendedActionSummaries: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListRecommendedActionSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendedActionSummariesCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListRecommendedActionSummariesCommandInput,
  ListRecommendedActionSummariesCommandOutput
>(ComputeOptimizerAutomationClient, ListRecommendedActionSummariesCommand, "nextToken", "nextToken", "maxResults");
