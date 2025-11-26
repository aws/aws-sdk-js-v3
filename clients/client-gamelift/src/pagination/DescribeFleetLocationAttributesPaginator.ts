// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetLocationAttributesCommand,
  DescribeFleetLocationAttributesCommandInput,
  DescribeFleetLocationAttributesCommandOutput,
} from "../commands/DescribeFleetLocationAttributesCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleetLocationAttributes: (
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetLocationAttributesCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetLocationAttributesCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeFleetLocationAttributesCommandInput,
  DescribeFleetLocationAttributesCommandOutput
>(GameLiftClient, DescribeFleetLocationAttributesCommand, "NextToken", "NextToken", "Limit");
