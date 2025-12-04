// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplaceRootVolumeTasksCommand,
  DescribeReplaceRootVolumeTasksCommandInput,
  DescribeReplaceRootVolumeTasksCommandOutput,
} from "../commands/DescribeReplaceRootVolumeTasksCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplaceRootVolumeTasks: (
  config: EC2PaginationConfiguration,
  input: DescribeReplaceRootVolumeTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplaceRootVolumeTasksCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeReplaceRootVolumeTasksCommandInput,
  DescribeReplaceRootVolumeTasksCommandOutput
>(EC2Client, DescribeReplaceRootVolumeTasksCommand, "NextToken", "NextToken", "MaxResults");
