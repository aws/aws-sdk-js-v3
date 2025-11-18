// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeVpnConcentratorsCommand,
  DescribeVpnConcentratorsCommandInput,
  DescribeVpnConcentratorsCommandOutput,
} from "../commands/DescribeVpnConcentratorsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVpnConcentrators: (
  config: EC2PaginationConfiguration,
  input: DescribeVpnConcentratorsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVpnConcentratorsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVpnConcentratorsCommandInput,
  DescribeVpnConcentratorsCommandOutput
>(EC2Client, DescribeVpnConcentratorsCommand, "NextToken", "NextToken", "MaxResults");
