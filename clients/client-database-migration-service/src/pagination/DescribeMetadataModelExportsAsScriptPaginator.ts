// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMetadataModelExportsAsScriptCommand,
  DescribeMetadataModelExportsAsScriptCommandInput,
  DescribeMetadataModelExportsAsScriptCommandOutput,
} from "../commands/DescribeMetadataModelExportsAsScriptCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMetadataModelExportsAsScript: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeMetadataModelExportsAsScriptCommandInput,
  ...rest: any[]
) => Paginator<DescribeMetadataModelExportsAsScriptCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeMetadataModelExportsAsScriptCommandInput,
  DescribeMetadataModelExportsAsScriptCommandOutput
>(DatabaseMigrationServiceClient, DescribeMetadataModelExportsAsScriptCommand, "Marker", "Marker", "MaxRecords");
