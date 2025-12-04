// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "../commands/DescribeUsersCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeUsers: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeUsersCommandInput,
  ...rest: any[]
) => Paginator<DescribeUsersCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput
>(ElastiCacheClient, DescribeUsersCommand, "Marker", "Marker", "MaxRecords");
