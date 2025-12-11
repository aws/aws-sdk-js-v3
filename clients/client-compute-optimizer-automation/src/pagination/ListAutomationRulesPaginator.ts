// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutomationRulesCommand,
  ListAutomationRulesCommandInput,
  ListAutomationRulesCommandOutput,
} from "../commands/ListAutomationRulesCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomationRules: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListAutomationRulesCommandInput,
  ...rest: any[]
) => Paginator<ListAutomationRulesCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListAutomationRulesCommandInput,
  ListAutomationRulesCommandOutput
>(ComputeOptimizerAutomationClient, ListAutomationRulesCommand, "nextToken", "nextToken", "maxResults");
