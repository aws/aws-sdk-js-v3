// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationConfigsCommand,
  DescribeReplicationConfigsCommandInput,
  DescribeReplicationConfigsCommandOutput,
} from "../commands/DescribeReplicationConfigsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationConfigs: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationConfigsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationConfigsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeReplicationConfigsCommandInput,
  DescribeReplicationConfigsCommandOutput
>(DatabaseMigrationServiceClient, DescribeReplicationConfigsCommand, "Marker", "Marker", "MaxRecords");
