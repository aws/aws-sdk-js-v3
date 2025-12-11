// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetAdvisorDatabasesCommand,
  DescribeFleetAdvisorDatabasesCommandInput,
  DescribeFleetAdvisorDatabasesCommandOutput,
} from "../commands/DescribeFleetAdvisorDatabasesCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleetAdvisorDatabases: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeFleetAdvisorDatabasesCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetAdvisorDatabasesCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeFleetAdvisorDatabasesCommandInput,
  DescribeFleetAdvisorDatabasesCommandOutput
>(DatabaseMigrationServiceClient, DescribeFleetAdvisorDatabasesCommand, "NextToken", "NextToken", "MaxRecords");
