// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationTaskIndividualAssessmentsCommand,
  DescribeReplicationTaskIndividualAssessmentsCommandInput,
  DescribeReplicationTaskIndividualAssessmentsCommandOutput,
} from "../commands/DescribeReplicationTaskIndividualAssessmentsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationTaskIndividualAssessments: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTaskIndividualAssessmentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationTaskIndividualAssessmentsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeReplicationTaskIndividualAssessmentsCommandInput,
  DescribeReplicationTaskIndividualAssessmentsCommandOutput
>(DatabaseMigrationServiceClient, DescribeReplicationTaskIndividualAssessmentsCommand, "Marker", "Marker", "MaxRecords");
