// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput,
} from "../commands/DescribeAutoScalingGroupsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAutoScalingGroups: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeAutoScalingGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAutoScalingGroupsCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput
>(AutoScalingClient, DescribeAutoScalingGroupsCommand, "NextToken", "NextToken", "MaxRecords");
