// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDataRepositoryTasksCommand,
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
} from "../commands/DescribeDataRepositoryTasksCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDataRepositoryTasks: (
  config: FSxPaginationConfiguration,
  input: DescribeDataRepositoryTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeDataRepositoryTasksCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput
>(FSxClient, DescribeDataRepositoryTasksCommand, "NextToken", "NextToken", "MaxResults");
