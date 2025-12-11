// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeServerlessCacheSnapshotsCommand,
  DescribeServerlessCacheSnapshotsCommandInput,
  DescribeServerlessCacheSnapshotsCommandOutput,
} from "../commands/DescribeServerlessCacheSnapshotsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServerlessCacheSnapshots: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeServerlessCacheSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeServerlessCacheSnapshotsCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeServerlessCacheSnapshotsCommandInput,
  DescribeServerlessCacheSnapshotsCommandOutput
>(ElastiCacheClient, DescribeServerlessCacheSnapshotsCommand, "NextToken", "NextToken", "MaxResults");
