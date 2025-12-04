// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetUtilizationCommand,
  DescribeFleetUtilizationCommandInput,
  DescribeFleetUtilizationCommandOutput,
} from "../commands/DescribeFleetUtilizationCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleetUtilization: (
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetUtilizationCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetUtilizationCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeFleetUtilizationCommandInput,
  DescribeFleetUtilizationCommandOutput
>(GameLiftClient, DescribeFleetUtilizationCommand, "NextToken", "NextToken", "Limit");
