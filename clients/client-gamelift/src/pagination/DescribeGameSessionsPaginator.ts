// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeGameSessionsCommand,
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput,
} from "../commands/DescribeGameSessionsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeGameSessions: (
  config: GameLiftPaginationConfiguration,
  input: DescribeGameSessionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeGameSessionsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput
>(GameLiftClient, DescribeGameSessionsCommand, "NextToken", "NextToken", "Limit");
