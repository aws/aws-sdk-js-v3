// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVpcsCommand,
  DescribeVpcsCommandInput,
  DescribeVpcsCommandOutput,
} from "../commands/DescribeVpcsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVpcs: (
  config: EC2PaginationConfiguration,
  input: DescribeVpcsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVpcsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVpcsCommandInput,
  DescribeVpcsCommandOutput
>(EC2Client, DescribeVpcsCommand, "NextToken", "NextToken", "MaxResults");
