// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeCapacityBlockStatusCommand,
  DescribeCapacityBlockStatusCommandInput,
  DescribeCapacityBlockStatusCommandOutput,
} from "../commands/DescribeCapacityBlockStatusCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCapacityBlockStatus: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityBlockStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityBlockStatusCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCapacityBlockStatusCommandInput,
  DescribeCapacityBlockStatusCommandOutput
>(EC2Client, DescribeCapacityBlockStatusCommand, "NextToken", "NextToken", "MaxResults");
