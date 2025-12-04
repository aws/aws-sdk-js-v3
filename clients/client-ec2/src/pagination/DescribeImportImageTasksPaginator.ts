// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeImportImageTasksCommand,
  DescribeImportImageTasksCommandInput,
  DescribeImportImageTasksCommandOutput,
} from "../commands/DescribeImportImageTasksCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImportImageTasks: (
  config: EC2PaginationConfiguration,
  input: DescribeImportImageTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeImportImageTasksCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeImportImageTasksCommandInput,
  DescribeImportImageTasksCommandOutput
>(EC2Client, DescribeImportImageTasksCommand, "NextToken", "NextToken", "MaxResults");
