// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListRecommendedActionsCommand,
  ListRecommendedActionsCommandInput,
  ListRecommendedActionsCommandOutput,
} from "../commands/ListRecommendedActionsCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendedActions: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListRecommendedActionsCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendedActionsCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListRecommendedActionsCommandInput,
  ListRecommendedActionsCommandOutput
>(ComputeOptimizerAutomationClient, ListRecommendedActionsCommand, "nextToken", "nextToken", "maxResults");
