// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMatchmakingConfigurationsCommand,
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
} from "../commands/DescribeMatchmakingConfigurationsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMatchmakingConfigurations: (
  config: GameLiftPaginationConfiguration,
  input: DescribeMatchmakingConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMatchmakingConfigurationsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput
>(GameLiftClient, DescribeMatchmakingConfigurationsCommand, "NextToken", "NextToken", "Limit");
