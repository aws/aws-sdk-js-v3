// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMetadataModelConversionsCommand,
  DescribeMetadataModelConversionsCommandInput,
  DescribeMetadataModelConversionsCommandOutput,
} from "../commands/DescribeMetadataModelConversionsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMetadataModelConversions: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeMetadataModelConversionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMetadataModelConversionsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeMetadataModelConversionsCommandInput,
  DescribeMetadataModelConversionsCommandOutput
>(DatabaseMigrationServiceClient, DescribeMetadataModelConversionsCommand, "Marker", "Marker", "MaxRecords");
