// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput,
} from "../commands/DescribeAwsNetworkPerformanceMetricSubscriptionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAwsNetworkPerformanceMetricSubscriptions: (
  config: EC2PaginationConfiguration,
  input: DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput
>(EC2Client, DescribeAwsNetworkPerformanceMetricSubscriptionsCommand, "NextToken", "NextToken", "MaxResults");
