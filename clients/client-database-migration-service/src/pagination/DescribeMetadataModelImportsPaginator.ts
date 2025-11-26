// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMetadataModelImportsCommand,
  DescribeMetadataModelImportsCommandInput,
  DescribeMetadataModelImportsCommandOutput,
} from "../commands/DescribeMetadataModelImportsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMetadataModelImports: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeMetadataModelImportsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMetadataModelImportsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeMetadataModelImportsCommandInput,
  DescribeMetadataModelImportsCommandOutput
>(DatabaseMigrationServiceClient, DescribeMetadataModelImportsCommand, "Marker", "Marker", "MaxRecords");
