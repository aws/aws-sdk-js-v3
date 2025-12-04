// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeGameSessionQueuesCommand,
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
} from "../commands/DescribeGameSessionQueuesCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeGameSessionQueues: (
  config: GameLiftPaginationConfiguration,
  input: DescribeGameSessionQueuesCommandInput,
  ...rest: any[]
) => Paginator<DescribeGameSessionQueuesCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput
>(GameLiftClient, DescribeGameSessionQueuesCommand, "NextToken", "NextToken", "Limit");
