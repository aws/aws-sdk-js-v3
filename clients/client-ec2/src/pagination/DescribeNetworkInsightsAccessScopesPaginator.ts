// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNetworkInsightsAccessScopesCommand,
  DescribeNetworkInsightsAccessScopesCommandInput,
  DescribeNetworkInsightsAccessScopesCommandOutput,
} from "../commands/DescribeNetworkInsightsAccessScopesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNetworkInsightsAccessScopes: (
  config: EC2PaginationConfiguration,
  input: DescribeNetworkInsightsAccessScopesCommandInput,
  ...rest: any[]
) => Paginator<DescribeNetworkInsightsAccessScopesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeNetworkInsightsAccessScopesCommandInput,
  DescribeNetworkInsightsAccessScopesCommandOutput
>(EC2Client, DescribeNetworkInsightsAccessScopesCommand, "NextToken", "NextToken", "MaxResults");
