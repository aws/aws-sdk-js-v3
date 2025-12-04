// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeConnectionsCommand,
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "../commands/DescribeConnectionsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConnections: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeConnectionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeConnectionsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput
>(DatabaseMigrationServiceClient, DescribeConnectionsCommand, "Marker", "Marker", "MaxRecords");
