// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeInstanceRefreshesCommand,
  DescribeInstanceRefreshesCommandInput,
  DescribeInstanceRefreshesCommandOutput,
} from "../commands/DescribeInstanceRefreshesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceRefreshes: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeInstanceRefreshesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceRefreshesCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeInstanceRefreshesCommandInput,
  DescribeInstanceRefreshesCommandOutput
>(AutoScalingClient, DescribeInstanceRefreshesCommand, "NextToken", "NextToken", "MaxRecords");
