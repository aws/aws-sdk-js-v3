// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutomationEventsCommand,
  ListAutomationEventsCommandInput,
  ListAutomationEventsCommandOutput,
} from "../commands/ListAutomationEventsCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomationEvents: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListAutomationEventsCommandInput,
  ...rest: any[]
) => Paginator<ListAutomationEventsCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListAutomationEventsCommandInput,
  ListAutomationEventsCommandOutput
>(ComputeOptimizerAutomationClient, ListAutomationEventsCommand, "nextToken", "nextToken", "maxResults");
