// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationTaskAssessmentRunsCommand,
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput,
} from "../commands/DescribeReplicationTaskAssessmentRunsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationTaskAssessmentRuns: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTaskAssessmentRunsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationTaskAssessmentRunsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput
>(DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentRunsCommand, "Marker", "Marker", "MaxRecords");
