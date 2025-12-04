// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMetadataModelCreationsCommand,
  DescribeMetadataModelCreationsCommandInput,
  DescribeMetadataModelCreationsCommandOutput,
} from "../commands/DescribeMetadataModelCreationsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMetadataModelCreations: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeMetadataModelCreationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMetadataModelCreationsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeMetadataModelCreationsCommandInput,
  DescribeMetadataModelCreationsCommandOutput
>(DatabaseMigrationServiceClient, DescribeMetadataModelCreationsCommand, "Marker", "Marker", "MaxRecords");
