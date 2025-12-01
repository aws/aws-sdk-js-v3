// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "../commands/DescribeEndpointsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEndpoints: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeEndpointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEndpointsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput
>(DatabaseMigrationServiceClient, DescribeEndpointsCommand, "Marker", "Marker", "MaxRecords");
