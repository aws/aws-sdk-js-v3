// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMatchmakingRuleSetsCommand,
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput,
} from "../commands/DescribeMatchmakingRuleSetsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMatchmakingRuleSets: (
  config: GameLiftPaginationConfiguration,
  input: DescribeMatchmakingRuleSetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMatchmakingRuleSetsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput
>(GameLiftClient, DescribeMatchmakingRuleSetsCommand, "NextToken", "NextToken", "Limit");
