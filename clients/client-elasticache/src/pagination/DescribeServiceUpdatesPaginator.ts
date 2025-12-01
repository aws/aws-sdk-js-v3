// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeServiceUpdatesCommand,
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "../commands/DescribeServiceUpdatesCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServiceUpdates: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeServiceUpdatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeServiceUpdatesCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput
>(ElastiCacheClient, DescribeServiceUpdatesCommand, "Marker", "Marker", "MaxRecords");
