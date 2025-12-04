// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTableStatisticsCommand,
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput,
} from "../commands/DescribeTableStatisticsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTableStatistics: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeTableStatisticsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTableStatisticsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput
>(DatabaseMigrationServiceClient, DescribeTableStatisticsCommand, "Marker", "Marker", "MaxRecords");
