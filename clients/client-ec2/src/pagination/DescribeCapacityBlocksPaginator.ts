// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeCapacityBlocksCommand,
  DescribeCapacityBlocksCommandInput,
  DescribeCapacityBlocksCommandOutput,
} from "../commands/DescribeCapacityBlocksCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCapacityBlocks: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityBlocksCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityBlocksCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCapacityBlocksCommandInput,
  DescribeCapacityBlocksCommandOutput
>(EC2Client, DescribeCapacityBlocksCommand, "NextToken", "NextToken", "MaxResults");
