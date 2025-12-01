// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRecommendationLimitationsCommand,
  DescribeRecommendationLimitationsCommandInput,
  DescribeRecommendationLimitationsCommandOutput,
} from "../commands/DescribeRecommendationLimitationsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRecommendationLimitations: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeRecommendationLimitationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRecommendationLimitationsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeRecommendationLimitationsCommandInput,
  DescribeRecommendationLimitationsCommandOutput
>(DatabaseMigrationServiceClient, DescribeRecommendationLimitationsCommand, "NextToken", "NextToken", "MaxRecords");
