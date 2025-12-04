// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeLogGroupsCommand,
  DescribeLogGroupsCommandInput,
  DescribeLogGroupsCommandOutput,
} from "../commands/DescribeLogGroupsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLogGroups: (
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeLogGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeLogGroupsCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  DescribeLogGroupsCommandInput,
  DescribeLogGroupsCommandOutput
>(CloudWatchLogsClient, DescribeLogGroupsCommand, "nextToken", "nextToken", "limit");
