// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNetworkInsightsAccessScopeAnalysesCommand,
  DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
  DescribeNetworkInsightsAccessScopeAnalysesCommandOutput,
} from "../commands/DescribeNetworkInsightsAccessScopeAnalysesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNetworkInsightsAccessScopeAnalyses: (
  config: EC2PaginationConfiguration,
  input: DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
  ...rest: any[]
) => Paginator<DescribeNetworkInsightsAccessScopeAnalysesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
  DescribeNetworkInsightsAccessScopeAnalysesCommandOutput
>(EC2Client, DescribeNetworkInsightsAccessScopeAnalysesCommand, "NextToken", "NextToken", "MaxResults");
