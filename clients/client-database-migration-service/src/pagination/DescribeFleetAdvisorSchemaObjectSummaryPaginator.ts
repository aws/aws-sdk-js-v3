// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetAdvisorSchemaObjectSummaryCommand,
  DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  DescribeFleetAdvisorSchemaObjectSummaryCommandOutput,
} from "../commands/DescribeFleetAdvisorSchemaObjectSummaryCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleetAdvisorSchemaObjectSummary: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetAdvisorSchemaObjectSummaryCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
  DescribeFleetAdvisorSchemaObjectSummaryCommandOutput
>(
  DatabaseMigrationServiceClient,
  DescribeFleetAdvisorSchemaObjectSummaryCommand,
  "NextToken",
  "NextToken",
  "MaxRecords"
);
