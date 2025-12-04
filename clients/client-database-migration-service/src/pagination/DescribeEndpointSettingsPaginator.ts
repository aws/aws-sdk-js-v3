// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEndpointSettingsCommand,
  DescribeEndpointSettingsCommandInput,
  DescribeEndpointSettingsCommandOutput,
} from "../commands/DescribeEndpointSettingsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEndpointSettings: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeEndpointSettingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEndpointSettingsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeEndpointSettingsCommandInput,
  DescribeEndpointSettingsCommandOutput
>(DatabaseMigrationServiceClient, DescribeEndpointSettingsCommand, "Marker", "Marker", "MaxRecords");
