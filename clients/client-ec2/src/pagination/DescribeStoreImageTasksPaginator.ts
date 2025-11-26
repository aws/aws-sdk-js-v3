// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeStoreImageTasksCommand,
  DescribeStoreImageTasksCommandInput,
  DescribeStoreImageTasksCommandOutput,
} from "../commands/DescribeStoreImageTasksCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStoreImageTasks: (
  config: EC2PaginationConfiguration,
  input: DescribeStoreImageTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeStoreImageTasksCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeStoreImageTasksCommandInput,
  DescribeStoreImageTasksCommandOutput
>(EC2Client, DescribeStoreImageTasksCommand, "NextToken", "NextToken", "MaxResults");
