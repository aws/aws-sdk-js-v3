// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetEventsCommand,
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput,
} from "../commands/DescribeFleetEventsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleetEvents: (
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetEventsCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetEventsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput
>(GameLiftClient, DescribeFleetEventsCommand, "NextToken", "NextToken", "Limit");
