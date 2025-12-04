// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  DescribeImportTasksCommand,
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput,
} from "../commands/DescribeImportTasksCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImportTasks: (
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeImportTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeImportTasksCommandOutput> = createPaginator<
  ApplicationDiscoveryServicePaginationConfiguration,
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput
>(ApplicationDiscoveryServiceClient, DescribeImportTasksCommand, "nextToken", "nextToken", "maxResults");
