// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeExportImageTasksCommand,
  DescribeExportImageTasksCommandInput,
  DescribeExportImageTasksCommandOutput,
} from "../commands/DescribeExportImageTasksCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeExportImageTasks: (
  config: EC2PaginationConfiguration,
  input: DescribeExportImageTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeExportImageTasksCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeExportImageTasksCommandInput,
  DescribeExportImageTasksCommandOutput
>(EC2Client, DescribeExportImageTasksCommand, "NextToken", "NextToken", "MaxResults");
