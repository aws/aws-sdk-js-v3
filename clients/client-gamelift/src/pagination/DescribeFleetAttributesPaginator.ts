// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetAttributesCommand,
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput,
} from "../commands/DescribeFleetAttributesCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleetAttributes: (
  config: GameLiftPaginationConfiguration,
  input: DescribeFleetAttributesCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetAttributesCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput
>(GameLiftClient, DescribeFleetAttributesCommand, "NextToken", "NextToken", "Limit");
