// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDataMigrationsCommand,
  DescribeDataMigrationsCommandInput,
  DescribeDataMigrationsCommandOutput,
} from "../commands/DescribeDataMigrationsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDataMigrations: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeDataMigrationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDataMigrationsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeDataMigrationsCommandInput,
  DescribeDataMigrationsCommandOutput
>(DatabaseMigrationServiceClient, DescribeDataMigrationsCommand, "Marker", "Marker", "MaxRecords");
