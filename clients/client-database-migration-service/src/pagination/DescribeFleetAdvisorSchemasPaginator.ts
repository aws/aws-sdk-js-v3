// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetAdvisorSchemasCommand,
  DescribeFleetAdvisorSchemasCommandInput,
  DescribeFleetAdvisorSchemasCommandOutput,
} from "../commands/DescribeFleetAdvisorSchemasCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleetAdvisorSchemas: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeFleetAdvisorSchemasCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetAdvisorSchemasCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeFleetAdvisorSchemasCommandInput,
  DescribeFleetAdvisorSchemasCommandOutput
>(DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemasCommand, "NextToken", "NextToken", "MaxRecords");
