// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstancesCommand,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "../commands/DescribeInstancesCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstances: (
  config: GameLiftPaginationConfiguration,
  input: DescribeInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstancesCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput
>(GameLiftClient, DescribeInstancesCommand, "NextToken", "NextToken", "Limit");
