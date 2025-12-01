// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClusterSnapshotsCommand,
  DescribeClusterSnapshotsCommandInput,
  DescribeClusterSnapshotsCommandOutput,
} from "../commands/DescribeClusterSnapshotsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusterSnapshots: (
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeClusterSnapshotsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeClusterSnapshotsCommandInput,
  DescribeClusterSnapshotsCommandOutput
>(RedshiftClient, DescribeClusterSnapshotsCommand, "Marker", "Marker", "MaxRecords");
