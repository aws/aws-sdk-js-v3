// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCacheEngineVersionsCommand,
  DescribeCacheEngineVersionsCommandInput,
  DescribeCacheEngineVersionsCommandOutput,
} from "../commands/DescribeCacheEngineVersionsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCacheEngineVersions: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheEngineVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCacheEngineVersionsCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeCacheEngineVersionsCommandInput,
  DescribeCacheEngineVersionsCommandOutput
>(ElastiCacheClient, DescribeCacheEngineVersionsCommand, "Marker", "Marker", "MaxRecords");
