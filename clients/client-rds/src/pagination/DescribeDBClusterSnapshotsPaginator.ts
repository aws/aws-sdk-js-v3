// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "../commands/DescribeDBClusterSnapshotsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterSnapshots: (
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterSnapshotsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput
>(RDSClient, DescribeDBClusterSnapshotsCommand, "Marker", "Marker", "MaxRecords");
