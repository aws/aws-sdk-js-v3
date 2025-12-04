// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeApplicableIndividualAssessmentsCommand,
  DescribeApplicableIndividualAssessmentsCommandInput,
  DescribeApplicableIndividualAssessmentsCommandOutput,
} from "../commands/DescribeApplicableIndividualAssessmentsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeApplicableIndividualAssessments: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeApplicableIndividualAssessmentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeApplicableIndividualAssessmentsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeApplicableIndividualAssessmentsCommandInput,
  DescribeApplicableIndividualAssessmentsCommandOutput
>(DatabaseMigrationServiceClient, DescribeApplicableIndividualAssessmentsCommand, "Marker", "Marker", "MaxRecords");
