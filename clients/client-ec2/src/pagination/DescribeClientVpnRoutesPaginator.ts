// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClientVpnRoutesCommand,
  DescribeClientVpnRoutesCommandInput,
  DescribeClientVpnRoutesCommandOutput,
} from "../commands/DescribeClientVpnRoutesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClientVpnRoutes: (
  config: EC2PaginationConfiguration,
  input: DescribeClientVpnRoutesCommandInput,
  ...rest: any[]
) => Paginator<DescribeClientVpnRoutesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeClientVpnRoutesCommandInput,
  DescribeClientVpnRoutesCommandOutput
>(EC2Client, DescribeClientVpnRoutesCommand, "NextToken", "NextToken", "MaxResults");
