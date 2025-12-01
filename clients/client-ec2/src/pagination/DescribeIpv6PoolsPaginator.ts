// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeIpv6PoolsCommand,
  DescribeIpv6PoolsCommandInput,
  DescribeIpv6PoolsCommandOutput,
} from "../commands/DescribeIpv6PoolsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIpv6Pools: (
  config: EC2PaginationConfiguration,
  input: DescribeIpv6PoolsCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpv6PoolsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeIpv6PoolsCommandInput,
  DescribeIpv6PoolsCommandOutput
>(EC2Client, DescribeIpv6PoolsCommand, "NextToken", "NextToken", "MaxResults");
