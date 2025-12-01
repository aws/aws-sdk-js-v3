// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVpcEndpointsCommand,
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "../commands/DescribeVpcEndpointsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVpcEndpoints: (
  config: EC2PaginationConfiguration,
  input: DescribeVpcEndpointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVpcEndpointsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput
>(EC2Client, DescribeVpcEndpointsCommand, "NextToken", "NextToken", "MaxResults");
