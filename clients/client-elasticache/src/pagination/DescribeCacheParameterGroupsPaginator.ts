// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCacheParameterGroupsCommand,
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput,
} from "../commands/DescribeCacheParameterGroupsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCacheParameterGroups: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheParameterGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCacheParameterGroupsCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput
>(ElastiCacheClient, DescribeCacheParameterGroupsCommand, "Marker", "Marker", "MaxRecords");
