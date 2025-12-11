// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetCapacityCommand,
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
} from "../commands/DescribeFleetCapacityCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleetCapacity: (
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetCapacityCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetCapacityCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput
>(GameLiftClient, DescribeFleetCapacityCommand, "NextToken", "NextToken", "Limit");
