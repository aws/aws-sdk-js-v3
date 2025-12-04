// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeUserGroupsCommand,
  DescribeUserGroupsCommandInput,
  DescribeUserGroupsCommandOutput,
} from "../commands/DescribeUserGroupsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeUserGroups: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeUserGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeUserGroupsCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeUserGroupsCommandInput,
  DescribeUserGroupsCommandOutput
>(ElastiCacheClient, DescribeUserGroupsCommand, "Marker", "Marker", "MaxRecords");
