// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import {
  GetPlanExecutionCommand,
  GetPlanExecutionCommandInput,
  GetPlanExecutionCommandOutput,
} from "../commands/GetPlanExecutionCommand";
import { ARCRegionSwitchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetPlanExecution: (
  config: ARCRegionSwitchPaginationConfiguration,
  input: GetPlanExecutionCommandInput,
  ...rest: any[]
) => Paginator<GetPlanExecutionCommandOutput> = createPaginator<
  ARCRegionSwitchPaginationConfiguration,
  GetPlanExecutionCommandInput,
  GetPlanExecutionCommandOutput
>(ARCRegionSwitchClient, GetPlanExecutionCommand, "nextToken", "nextToken", "maxResults");
