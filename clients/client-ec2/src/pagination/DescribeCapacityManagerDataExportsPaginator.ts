// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCapacityManagerDataExportsCommand,
  DescribeCapacityManagerDataExportsCommandInput,
  DescribeCapacityManagerDataExportsCommandOutput,
} from "../commands/DescribeCapacityManagerDataExportsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCapacityManagerDataExports: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityManagerDataExportsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityManagerDataExportsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCapacityManagerDataExportsCommandInput,
  DescribeCapacityManagerDataExportsCommandOutput
>(EC2Client, DescribeCapacityManagerDataExportsCommand, "NextToken", "NextToken", "MaxResults");
