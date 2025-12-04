// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeGameSessionDetailsCommand,
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput,
} from "../commands/DescribeGameSessionDetailsCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeGameSessionDetails: (
  config: GameLiftPaginationConfiguration,
  input: DescribeGameSessionDetailsCommandInput,
  ...rest: any[]
) => Paginator<DescribeGameSessionDetailsCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput
>(GameLiftClient, DescribeGameSessionDetailsCommand, "NextToken", "NextToken", "Limit");
