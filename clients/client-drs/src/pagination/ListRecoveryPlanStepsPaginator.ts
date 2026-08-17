// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecoveryPlanStepsCommand,
  ListRecoveryPlanStepsCommandInput,
  ListRecoveryPlanStepsCommandOutput,
} from "../commands/ListRecoveryPlanStepsCommand";
import { DrsClient } from "../DrsClient";
import type { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecoveryPlanSteps: (
  config: DrsPaginationConfiguration,
  input: ListRecoveryPlanStepsCommandInput,
  ...rest: any[]
) => Paginator<ListRecoveryPlanStepsCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  ListRecoveryPlanStepsCommandInput,
  ListRecoveryPlanStepsCommandOutput
>(DrsClient, ListRecoveryPlanStepsCommand, "nextToken", "nextToken", "maxResults");
