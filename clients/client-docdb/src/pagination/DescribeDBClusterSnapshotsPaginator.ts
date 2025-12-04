// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "../commands/DescribeDBClusterSnapshotsCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterSnapshots: (
  config: DocDBPaginationConfiguration,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterSnapshotsCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput
>(DocDBClient, DescribeDBClusterSnapshotsCommand, "Marker", "Marker", "MaxRecords");
