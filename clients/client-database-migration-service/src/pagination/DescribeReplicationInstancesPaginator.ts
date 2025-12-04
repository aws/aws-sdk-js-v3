// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationInstancesCommand,
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput,
} from "../commands/DescribeReplicationInstancesCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationInstances: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationInstancesCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput
>(DatabaseMigrationServiceClient, DescribeReplicationInstancesCommand, "Marker", "Marker", "MaxRecords");
