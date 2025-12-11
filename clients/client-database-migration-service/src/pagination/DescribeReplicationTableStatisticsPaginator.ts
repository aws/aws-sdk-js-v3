// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationTableStatisticsCommand,
  DescribeReplicationTableStatisticsCommandInput,
  DescribeReplicationTableStatisticsCommandOutput,
} from "../commands/DescribeReplicationTableStatisticsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationTableStatistics: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTableStatisticsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationTableStatisticsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeReplicationTableStatisticsCommandInput,
  DescribeReplicationTableStatisticsCommandOutput
>(DatabaseMigrationServiceClient, DescribeReplicationTableStatisticsCommand, "Marker", "Marker", "MaxRecords");
