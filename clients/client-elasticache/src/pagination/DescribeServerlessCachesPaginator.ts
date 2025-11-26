// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeServerlessCachesCommand,
  DescribeServerlessCachesCommandInput,
  DescribeServerlessCachesCommandOutput,
} from "../commands/DescribeServerlessCachesCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServerlessCaches: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeServerlessCachesCommandInput,
  ...rest: any[]
) => Paginator<DescribeServerlessCachesCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeServerlessCachesCommandInput,
  DescribeServerlessCachesCommandOutput
>(ElastiCacheClient, DescribeServerlessCachesCommand, "NextToken", "NextToken", "MaxResults");
