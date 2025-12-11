// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCostEstimationCommand,
  GetCostEstimationCommandInput,
  GetCostEstimationCommandOutput,
} from "../commands/GetCostEstimationCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCostEstimation: (
  config: DevOpsGuruPaginationConfiguration,
  input: GetCostEstimationCommandInput,
  ...rest: any[]
) => Paginator<GetCostEstimationCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  GetCostEstimationCommandInput,
  GetCostEstimationCommandOutput
>(DevOpsGuruClient, GetCostEstimationCommand, "NextToken", "NextToken", "");
