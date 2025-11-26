// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRouteServerPeersCommand,
  DescribeRouteServerPeersCommandInput,
  DescribeRouteServerPeersCommandOutput,
} from "../commands/DescribeRouteServerPeersCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRouteServerPeers: (
  config: EC2PaginationConfiguration,
  input: DescribeRouteServerPeersCommandInput,
  ...rest: any[]
) => Paginator<DescribeRouteServerPeersCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeRouteServerPeersCommandInput,
  DescribeRouteServerPeersCommandOutput
>(EC2Client, DescribeRouteServerPeersCommand, "NextToken", "NextToken", "MaxResults");
