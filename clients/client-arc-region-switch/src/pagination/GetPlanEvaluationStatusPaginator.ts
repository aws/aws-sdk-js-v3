// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ARCRegionSwitchClient } from "../ARCRegionSwitchClient";
import {
  GetPlanEvaluationStatusCommand,
  GetPlanEvaluationStatusCommandInput,
  GetPlanEvaluationStatusCommandOutput,
} from "../commands/GetPlanEvaluationStatusCommand";
import { ARCRegionSwitchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetPlanEvaluationStatus: (
  config: ARCRegionSwitchPaginationConfiguration,
  input: GetPlanEvaluationStatusCommandInput,
  ...rest: any[]
) => Paginator<GetPlanEvaluationStatusCommandOutput> = createPaginator<
  ARCRegionSwitchPaginationConfiguration,
  GetPlanEvaluationStatusCommandInput,
  GetPlanEvaluationStatusCommandOutput
>(ARCRegionSwitchClient, GetPlanEvaluationStatusCommand, "nextToken", "nextToken", "maxResults");
