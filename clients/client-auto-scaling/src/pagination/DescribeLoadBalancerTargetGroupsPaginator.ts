// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeLoadBalancerTargetGroupsCommand,
  DescribeLoadBalancerTargetGroupsCommandInput,
  DescribeLoadBalancerTargetGroupsCommandOutput,
} from "../commands/DescribeLoadBalancerTargetGroupsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLoadBalancerTargetGroups: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeLoadBalancerTargetGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeLoadBalancerTargetGroupsCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeLoadBalancerTargetGroupsCommandInput,
  DescribeLoadBalancerTargetGroupsCommandOutput
>(AutoScalingClient, DescribeLoadBalancerTargetGroupsCommand, "NextToken", "NextToken", "MaxRecords");
