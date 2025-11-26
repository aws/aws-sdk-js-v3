// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrderableReplicationInstancesCommand,
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput,
} from "../commands/DescribeOrderableReplicationInstancesCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrderableReplicationInstances: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeOrderableReplicationInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrderableReplicationInstancesCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput
>(DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand, "Marker", "Marker", "MaxRecords");
