// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "../commands/DescribeLoadBalancersCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLoadBalancers: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeLoadBalancersCommandInput,
  ...rest: any[]
) => Paginator<DescribeLoadBalancersCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput
>(AutoScalingClient, DescribeLoadBalancersCommand, "NextToken", "NextToken", "MaxRecords");
