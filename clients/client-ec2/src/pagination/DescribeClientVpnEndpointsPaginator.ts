// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClientVpnEndpointsCommand,
  DescribeClientVpnEndpointsCommandInput,
  DescribeClientVpnEndpointsCommandOutput,
} from "../commands/DescribeClientVpnEndpointsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClientVpnEndpoints: (
  config: EC2PaginationConfiguration,
  input: DescribeClientVpnEndpointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeClientVpnEndpointsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeClientVpnEndpointsCommandInput,
  DescribeClientVpnEndpointsCommandOutput
>(EC2Client, DescribeClientVpnEndpointsCommand, "NextToken", "NextToken", "MaxResults");
