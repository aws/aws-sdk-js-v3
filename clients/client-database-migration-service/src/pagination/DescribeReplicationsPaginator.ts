// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationsCommand,
  DescribeReplicationsCommandInput,
  DescribeReplicationsCommandOutput,
} from "../commands/DescribeReplicationsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplications: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeReplicationsCommandInput,
  DescribeReplicationsCommandOutput
>(DatabaseMigrationServiceClient, DescribeReplicationsCommand, "Marker", "Marker", "MaxRecords");
