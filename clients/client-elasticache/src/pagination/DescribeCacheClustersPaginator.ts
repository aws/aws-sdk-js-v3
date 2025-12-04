// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCacheClustersCommand,
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput,
} from "../commands/DescribeCacheClustersCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCacheClusters: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeCacheClustersCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput
>(ElastiCacheClient, DescribeCacheClustersCommand, "Marker", "Marker", "MaxRecords");
