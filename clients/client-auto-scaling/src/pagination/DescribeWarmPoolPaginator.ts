// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeWarmPoolCommand,
  DescribeWarmPoolCommandInput,
  DescribeWarmPoolCommandOutput,
} from "../commands/DescribeWarmPoolCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeWarmPool: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeWarmPoolCommandInput,
  ...rest: any[]
) => Paginator<DescribeWarmPoolCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeWarmPoolCommandInput,
  DescribeWarmPoolCommandOutput
>(AutoScalingClient, DescribeWarmPoolCommand, "NextToken", "NextToken", "MaxRecords");
