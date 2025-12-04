// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeIpamPoolsCommand,
  DescribeIpamPoolsCommandInput,
  DescribeIpamPoolsCommandOutput,
} from "../commands/DescribeIpamPoolsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIpamPools: (
  config: EC2PaginationConfiguration,
  input: DescribeIpamPoolsCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpamPoolsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeIpamPoolsCommandInput,
  DescribeIpamPoolsCommandOutput
>(EC2Client, DescribeIpamPoolsCommand, "NextToken", "NextToken", "MaxResults");
