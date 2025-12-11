// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "../commands/DescribeDBClusterSnapshotsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterSnapshots: (
  config: NeptunePaginationConfiguration,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterSnapshotsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput
>(NeptuneClient, DescribeDBClusterSnapshotsCommand, "Marker", "Marker", "MaxRecords");
