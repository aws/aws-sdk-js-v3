// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationInstanceTaskLogsCommand,
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput,
} from "../commands/DescribeReplicationInstanceTaskLogsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationInstanceTaskLogs: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationInstanceTaskLogsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationInstanceTaskLogsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput
>(DatabaseMigrationServiceClient, DescribeReplicationInstanceTaskLogsCommand, "Marker", "Marker", "MaxRecords");
