// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecoveryPlanExecutionsCommand,
  ListRecoveryPlanExecutionsCommandInput,
  ListRecoveryPlanExecutionsCommandOutput,
} from "../commands/ListRecoveryPlanExecutionsCommand";
import { DrsClient } from "../DrsClient";
import type { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecoveryPlanExecutions: (
  config: DrsPaginationConfiguration,
  input: ListRecoveryPlanExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListRecoveryPlanExecutionsCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  ListRecoveryPlanExecutionsCommandInput,
  ListRecoveryPlanExecutionsCommandOutput
>(DrsClient, ListRecoveryPlanExecutionsCommand, "nextToken", "nextToken", "maxResults");
