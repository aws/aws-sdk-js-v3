// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetAdvisorLsaAnalysisCommand,
  DescribeFleetAdvisorLsaAnalysisCommandInput,
  DescribeFleetAdvisorLsaAnalysisCommandOutput,
} from "../commands/DescribeFleetAdvisorLsaAnalysisCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleetAdvisorLsaAnalysis: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeFleetAdvisorLsaAnalysisCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetAdvisorLsaAnalysisCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeFleetAdvisorLsaAnalysisCommandInput,
  DescribeFleetAdvisorLsaAnalysisCommandOutput
>(DatabaseMigrationServiceClient, DescribeFleetAdvisorLsaAnalysisCommand, "NextToken", "NextToken", "MaxRecords");
