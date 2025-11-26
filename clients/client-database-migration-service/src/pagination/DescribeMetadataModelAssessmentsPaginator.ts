// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMetadataModelAssessmentsCommand,
  DescribeMetadataModelAssessmentsCommandInput,
  DescribeMetadataModelAssessmentsCommandOutput,
} from "../commands/DescribeMetadataModelAssessmentsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMetadataModelAssessments: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeMetadataModelAssessmentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMetadataModelAssessmentsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeMetadataModelAssessmentsCommandInput,
  DescribeMetadataModelAssessmentsCommandOutput
>(DatabaseMigrationServiceClient, DescribeMetadataModelAssessmentsCommand, "Marker", "Marker", "MaxRecords");
