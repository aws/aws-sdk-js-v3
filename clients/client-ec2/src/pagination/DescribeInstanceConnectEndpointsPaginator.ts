// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstanceConnectEndpointsCommand,
  DescribeInstanceConnectEndpointsCommandInput,
  DescribeInstanceConnectEndpointsCommandOutput,
} from "../commands/DescribeInstanceConnectEndpointsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceConnectEndpoints: (
  config: EC2PaginationConfiguration,
  input: DescribeInstanceConnectEndpointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceConnectEndpointsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeInstanceConnectEndpointsCommandInput,
  DescribeInstanceConnectEndpointsCommandOutput
>(EC2Client, DescribeInstanceConnectEndpointsCommand, "NextToken", "NextToken", "MaxResults");
