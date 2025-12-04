// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEndpointTypesCommand,
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput,
} from "../commands/DescribeEndpointTypesCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEndpointTypes: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeEndpointTypesCommandInput,
  ...rest: any[]
) => Paginator<DescribeEndpointTypesCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput
>(DatabaseMigrationServiceClient, DescribeEndpointTypesCommand, "Marker", "Marker", "MaxRecords");
