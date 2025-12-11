// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  DescribeExportTasksCommand,
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "../commands/DescribeExportTasksCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeExportTasks: (
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeExportTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeExportTasksCommandOutput> = createPaginator<
  ApplicationDiscoveryServicePaginationConfiguration,
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput
>(ApplicationDiscoveryServiceClient, DescribeExportTasksCommand, "nextToken", "nextToken", "maxResults");
