// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAutomationRulePreviewCommand,
  ListAutomationRulePreviewCommandInput,
  ListAutomationRulePreviewCommandOutput,
} from "../commands/ListAutomationRulePreviewCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomationRulePreview: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListAutomationRulePreviewCommandInput,
  ...rest: any[]
) => Paginator<ListAutomationRulePreviewCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListAutomationRulePreviewCommandInput,
  ListAutomationRulePreviewCommandOutput
>(ComputeOptimizerAutomationClient, ListAutomationRulePreviewCommand, "nextToken", "nextToken", "maxResults");
