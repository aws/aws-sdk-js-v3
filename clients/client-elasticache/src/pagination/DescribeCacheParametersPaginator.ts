// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCacheParametersCommand,
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput,
} from "../commands/DescribeCacheParametersCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCacheParameters: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeCacheParametersCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput
>(ElastiCacheClient, DescribeCacheParametersCommand, "Marker", "Marker", "MaxRecords");
