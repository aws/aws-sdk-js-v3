// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMetadataModelExportsToTargetCommand,
  DescribeMetadataModelExportsToTargetCommandInput,
  DescribeMetadataModelExportsToTargetCommandOutput,
} from "../commands/DescribeMetadataModelExportsToTargetCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMetadataModelExportsToTarget: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeMetadataModelExportsToTargetCommandInput,
  ...rest: any[]
) => Paginator<DescribeMetadataModelExportsToTargetCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeMetadataModelExportsToTargetCommandInput,
  DescribeMetadataModelExportsToTargetCommandOutput
>(DatabaseMigrationServiceClient, DescribeMetadataModelExportsToTargetCommand, "Marker", "Marker", "MaxRecords");
