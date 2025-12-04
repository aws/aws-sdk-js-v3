// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRecommendationsCommand,
  DescribeRecommendationsCommandInput,
  DescribeRecommendationsCommandOutput,
} from "../commands/DescribeRecommendationsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRecommendations: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRecommendationsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeRecommendationsCommandInput,
  DescribeRecommendationsCommandOutput
>(DatabaseMigrationServiceClient, DescribeRecommendationsCommand, "NextToken", "NextToken", "MaxRecords");
