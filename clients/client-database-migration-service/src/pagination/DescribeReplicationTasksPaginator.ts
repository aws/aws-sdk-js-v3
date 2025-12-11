// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationTasksCommand,
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput,
} from "../commands/DescribeReplicationTasksCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationTasks: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationTasksCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput
>(DatabaseMigrationServiceClient, DescribeReplicationTasksCommand, "Marker", "Marker", "MaxRecords");
