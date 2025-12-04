// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReplicationGroupsCommand,
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput,
} from "../commands/DescribeReplicationGroupsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReplicationGroups: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeReplicationGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReplicationGroupsCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput
>(ElastiCacheClient, DescribeReplicationGroupsCommand, "Marker", "Marker", "MaxRecords");
