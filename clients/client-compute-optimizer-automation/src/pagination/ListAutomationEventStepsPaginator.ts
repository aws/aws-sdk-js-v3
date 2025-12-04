// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutomationEventStepsCommand,
  ListAutomationEventStepsCommandInput,
  ListAutomationEventStepsCommandOutput,
} from "../commands/ListAutomationEventStepsCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomationEventSteps: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListAutomationEventStepsCommandInput,
  ...rest: any[]
) => Paginator<ListAutomationEventStepsCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListAutomationEventStepsCommandInput,
  ListAutomationEventStepsCommandOutput
>(ComputeOptimizerAutomationClient, ListAutomationEventStepsCommand, "nextToken", "nextToken", "maxResults");
