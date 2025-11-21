// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAutomationRulePreviewSummariesCommand,
  ListAutomationRulePreviewSummariesCommandInput,
  ListAutomationRulePreviewSummariesCommandOutput,
} from "../commands/ListAutomationRulePreviewSummariesCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomationRulePreviewSummaries: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListAutomationRulePreviewSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListAutomationRulePreviewSummariesCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListAutomationRulePreviewSummariesCommandInput,
  ListAutomationRulePreviewSummariesCommandOutput
>(ComputeOptimizerAutomationClient, ListAutomationRulePreviewSummariesCommand, "nextToken", "nextToken", "maxResults");
