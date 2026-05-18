// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeIpamPoolAllocationsCommand,
  DescribeIpamPoolAllocationsCommandInput,
  DescribeIpamPoolAllocationsCommandOutput,
} from "../commands/DescribeIpamPoolAllocationsCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIpamPoolAllocations: (
  config: EC2PaginationConfiguration,
  input: DescribeIpamPoolAllocationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpamPoolAllocationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeIpamPoolAllocationsCommandInput,
  DescribeIpamPoolAllocationsCommandOutput
>(EC2Client, DescribeIpamPoolAllocationsCommand, "NextToken", "NextToken", "MaxResults");
