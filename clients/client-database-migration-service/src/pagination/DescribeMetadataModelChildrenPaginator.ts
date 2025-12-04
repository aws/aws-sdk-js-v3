// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMetadataModelChildrenCommand,
  DescribeMetadataModelChildrenCommandInput,
  DescribeMetadataModelChildrenCommandOutput,
} from "../commands/DescribeMetadataModelChildrenCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMetadataModelChildren: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeMetadataModelChildrenCommandInput,
  ...rest: any[]
) => Paginator<DescribeMetadataModelChildrenCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeMetadataModelChildrenCommandInput,
  DescribeMetadataModelChildrenCommandOutput
>(DatabaseMigrationServiceClient, DescribeMetadataModelChildrenCommand, "Marker", "Marker", "MaxRecords");
