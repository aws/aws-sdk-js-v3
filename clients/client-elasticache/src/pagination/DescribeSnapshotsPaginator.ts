// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "../commands/DescribeSnapshotsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapshots: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapshotsCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput
>(ElastiCacheClient, DescribeSnapshotsCommand, "Marker", "Marker", "MaxRecords");
