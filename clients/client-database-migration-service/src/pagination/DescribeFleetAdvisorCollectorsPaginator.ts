// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetAdvisorCollectorsCommand,
  DescribeFleetAdvisorCollectorsCommandInput,
  DescribeFleetAdvisorCollectorsCommandOutput,
} from "../commands/DescribeFleetAdvisorCollectorsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleetAdvisorCollectors: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeFleetAdvisorCollectorsCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetAdvisorCollectorsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeFleetAdvisorCollectorsCommandInput,
  DescribeFleetAdvisorCollectorsCommandOutput
>(DatabaseMigrationServiceClient, DescribeFleetAdvisorCollectorsCommand, "NextToken", "NextToken", "MaxRecords");
