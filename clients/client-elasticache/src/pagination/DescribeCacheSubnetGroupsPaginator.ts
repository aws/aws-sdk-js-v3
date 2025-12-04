// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCacheSubnetGroupsCommand,
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput,
} from "../commands/DescribeCacheSubnetGroupsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCacheSubnetGroups: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheSubnetGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCacheSubnetGroupsCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput
>(ElastiCacheClient, DescribeCacheSubnetGroupsCommand, "Marker", "Marker", "MaxRecords");
