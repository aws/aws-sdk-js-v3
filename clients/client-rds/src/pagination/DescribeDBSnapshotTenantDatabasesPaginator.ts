// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBSnapshotTenantDatabasesCommand,
  DescribeDBSnapshotTenantDatabasesCommandInput,
  DescribeDBSnapshotTenantDatabasesCommandOutput,
} from "../commands/DescribeDBSnapshotTenantDatabasesCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBSnapshotTenantDatabases: (
  config: RDSPaginationConfiguration,
  input: DescribeDBSnapshotTenantDatabasesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBSnapshotTenantDatabasesCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBSnapshotTenantDatabasesCommandInput,
  DescribeDBSnapshotTenantDatabasesCommandOutput
>(RDSClient, DescribeDBSnapshotTenantDatabasesCommand, "Marker", "Marker", "MaxRecords");
