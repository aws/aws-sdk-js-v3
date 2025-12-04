// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeUpdateActionsCommand,
  DescribeUpdateActionsCommandInput,
  DescribeUpdateActionsCommandOutput,
} from "../commands/DescribeUpdateActionsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeUpdateActions: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeUpdateActionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeUpdateActionsCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeUpdateActionsCommandInput,
  DescribeUpdateActionsCommandOutput
>(ElastiCacheClient, DescribeUpdateActionsCommand, "Marker", "Marker", "MaxRecords");
