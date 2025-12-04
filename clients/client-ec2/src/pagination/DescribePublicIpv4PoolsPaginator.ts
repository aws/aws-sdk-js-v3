// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePublicIpv4PoolsCommand,
  DescribePublicIpv4PoolsCommandInput,
  DescribePublicIpv4PoolsCommandOutput,
} from "../commands/DescribePublicIpv4PoolsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePublicIpv4Pools: (
  config: EC2PaginationConfiguration,
  input: DescribePublicIpv4PoolsCommandInput,
  ...rest: any[]
) => Paginator<DescribePublicIpv4PoolsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribePublicIpv4PoolsCommandInput,
  DescribePublicIpv4PoolsCommandOutput
>(EC2Client, DescribePublicIpv4PoolsCommand, "NextToken", "NextToken", "MaxResults");
