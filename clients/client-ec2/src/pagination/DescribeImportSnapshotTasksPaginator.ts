// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeImportSnapshotTasksCommand,
  DescribeImportSnapshotTasksCommandInput,
  DescribeImportSnapshotTasksCommandOutput,
} from "../commands/DescribeImportSnapshotTasksCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImportSnapshotTasks: (
  config: EC2PaginationConfiguration,
  input: DescribeImportSnapshotTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeImportSnapshotTasksCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeImportSnapshotTasksCommandInput,
  DescribeImportSnapshotTasksCommandOutput
>(EC2Client, DescribeImportSnapshotTasksCommand, "NextToken", "NextToken", "MaxResults");
