// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDataProvidersCommand,
  DescribeDataProvidersCommandInput,
  DescribeDataProvidersCommandOutput,
} from "../commands/DescribeDataProvidersCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDataProviders: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeDataProvidersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDataProvidersCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeDataProvidersCommandInput,
  DescribeDataProvidersCommandOutput
>(DatabaseMigrationServiceClient, DescribeDataProvidersCommand, "Marker", "Marker", "MaxRecords");
