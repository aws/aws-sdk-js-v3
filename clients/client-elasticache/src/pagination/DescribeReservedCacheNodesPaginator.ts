// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedCacheNodesCommand,
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput,
} from "../commands/DescribeReservedCacheNodesCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedCacheNodes: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeReservedCacheNodesCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedCacheNodesCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput
>(ElastiCacheClient, DescribeReservedCacheNodesCommand, "Marker", "Marker", "MaxRecords");
