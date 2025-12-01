// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNetworkInsightsPathsCommand,
  DescribeNetworkInsightsPathsCommandInput,
  DescribeNetworkInsightsPathsCommandOutput,
} from "../commands/DescribeNetworkInsightsPathsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNetworkInsightsPaths: (
  config: EC2PaginationConfiguration,
  input: DescribeNetworkInsightsPathsCommandInput,
  ...rest: any[]
) => Paginator<DescribeNetworkInsightsPathsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeNetworkInsightsPathsCommandInput,
  DescribeNetworkInsightsPathsCommandOutput
>(EC2Client, DescribeNetworkInsightsPathsCommand, "NextToken", "NextToken", "MaxResults");
