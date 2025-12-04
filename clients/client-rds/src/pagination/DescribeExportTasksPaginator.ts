// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeExportTasksCommand,
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "../commands/DescribeExportTasksCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeExportTasks: (
  config: RDSPaginationConfiguration,
  input: DescribeExportTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeExportTasksCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput
>(RDSClient, DescribeExportTasksCommand, "Marker", "Marker", "MaxRecords");
