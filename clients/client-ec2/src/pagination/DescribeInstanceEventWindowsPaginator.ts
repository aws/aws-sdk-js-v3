// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstanceEventWindowsCommand,
  DescribeInstanceEventWindowsCommandInput,
  DescribeInstanceEventWindowsCommandOutput,
} from "../commands/DescribeInstanceEventWindowsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceEventWindows: (
  config: EC2PaginationConfiguration,
  input: DescribeInstanceEventWindowsCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceEventWindowsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeInstanceEventWindowsCommandInput,
  DescribeInstanceEventWindowsCommandOutput
>(EC2Client, DescribeInstanceEventWindowsCommand, "NextToken", "NextToken", "MaxResults");
