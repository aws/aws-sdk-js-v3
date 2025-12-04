// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCacheSecurityGroupsCommand,
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput,
} from "../commands/DescribeCacheSecurityGroupsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCacheSecurityGroups: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheSecurityGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCacheSecurityGroupsCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput
>(ElastiCacheClient, DescribeCacheSecurityGroupsCommand, "Marker", "Marker", "MaxRecords");
