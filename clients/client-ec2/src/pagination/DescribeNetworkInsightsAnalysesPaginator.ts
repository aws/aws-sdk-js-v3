// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNetworkInsightsAnalysesCommand,
  DescribeNetworkInsightsAnalysesCommandInput,
  DescribeNetworkInsightsAnalysesCommandOutput,
} from "../commands/DescribeNetworkInsightsAnalysesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNetworkInsightsAnalyses: (
  config: EC2PaginationConfiguration,
  input: DescribeNetworkInsightsAnalysesCommandInput,
  ...rest: any[]
) => Paginator<DescribeNetworkInsightsAnalysesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeNetworkInsightsAnalysesCommandInput,
  DescribeNetworkInsightsAnalysesCommandOutput
>(EC2Client, DescribeNetworkInsightsAnalysesCommand, "NextToken", "NextToken", "MaxResults");
