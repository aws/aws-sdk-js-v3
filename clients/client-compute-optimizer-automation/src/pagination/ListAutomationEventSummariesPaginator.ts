// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAutomationEventSummariesCommand,
  ListAutomationEventSummariesCommandInput,
  ListAutomationEventSummariesCommandOutput,
} from "../commands/ListAutomationEventSummariesCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomationEventSummaries: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListAutomationEventSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListAutomationEventSummariesCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListAutomationEventSummariesCommandInput,
  ListAutomationEventSummariesCommandOutput
>(ComputeOptimizerAutomationClient, ListAutomationEventSummariesCommand, "nextToken", "nextToken", "maxResults");
