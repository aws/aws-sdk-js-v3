// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeImageUsageReportsCommand,
  DescribeImageUsageReportsCommandInput,
  DescribeImageUsageReportsCommandOutput,
} from "../commands/DescribeImageUsageReportsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImageUsageReports: (
  config: EC2PaginationConfiguration,
  input: DescribeImageUsageReportsCommandInput,
  ...rest: any[]
) => Paginator<DescribeImageUsageReportsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeImageUsageReportsCommandInput,
  DescribeImageUsageReportsCommandOutput
>(EC2Client, DescribeImageUsageReportsCommand, "NextToken", "NextToken", "MaxResults");
