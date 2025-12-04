// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePlayerSessionsCommand,
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
} from "../commands/DescribePlayerSessionsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePlayerSessions: (
  config: GameLiftPaginationConfiguration,
  input: DescribePlayerSessionsCommandInput,
  ...rest: any[]
) => Paginator<DescribePlayerSessionsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput
>(GameLiftClient, DescribePlayerSessionsCommand, "NextToken", "NextToken", "Limit");
