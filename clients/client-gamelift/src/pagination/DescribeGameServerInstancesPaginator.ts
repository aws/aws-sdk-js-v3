// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeGameServerInstancesCommand,
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
} from "../commands/DescribeGameServerInstancesCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeGameServerInstances: (
  config: GameLiftPaginationConfiguration,
  input: DescribeGameServerInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeGameServerInstancesCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput
>(GameLiftClient, DescribeGameServerInstancesCommand, "NextToken", "NextToken", "Limit");
