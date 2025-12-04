// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRouteServerEndpointsCommand,
  DescribeRouteServerEndpointsCommandInput,
  DescribeRouteServerEndpointsCommandOutput,
} from "../commands/DescribeRouteServerEndpointsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRouteServerEndpoints: (
  config: EC2PaginationConfiguration,
  input: DescribeRouteServerEndpointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRouteServerEndpointsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeRouteServerEndpointsCommandInput,
  DescribeRouteServerEndpointsCommandOutput
>(EC2Client, DescribeRouteServerEndpointsCommand, "NextToken", "NextToken", "MaxResults");
