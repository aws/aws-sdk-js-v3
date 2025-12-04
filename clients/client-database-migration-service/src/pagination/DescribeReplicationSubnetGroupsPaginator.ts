// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationSubnetGroupsCommand,
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput,
} from "../commands/DescribeReplicationSubnetGroupsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationSubnetGroups: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationSubnetGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationSubnetGroupsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput
>(DatabaseMigrationServiceClient, DescribeReplicationSubnetGroupsCommand, "Marker", "Marker", "MaxRecords");
