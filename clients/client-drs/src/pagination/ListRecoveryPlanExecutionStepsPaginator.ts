// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecoveryPlanExecutionStepsCommand,
  ListRecoveryPlanExecutionStepsCommandInput,
  ListRecoveryPlanExecutionStepsCommandOutput,
} from "../commands/ListRecoveryPlanExecutionStepsCommand";
import { DrsClient } from "../DrsClient";
import type { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecoveryPlanExecutionSteps: (
  config: DrsPaginationConfiguration,
  input: ListRecoveryPlanExecutionStepsCommandInput,
  ...rest: any[]
) => Paginator<ListRecoveryPlanExecutionStepsCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  ListRecoveryPlanExecutionStepsCommandInput,
  ListRecoveryPlanExecutionStepsCommandOutput
>(DrsClient, ListRecoveryPlanExecutionStepsCommand, "nextToken", "nextToken", "maxResults");
