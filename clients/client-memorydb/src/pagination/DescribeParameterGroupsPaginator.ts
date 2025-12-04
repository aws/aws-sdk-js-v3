// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeParameterGroupsCommand,
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput,
} from "../commands/DescribeParameterGroupsCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeParameterGroups: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeParameterGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeParameterGroupsCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput
>(MemoryDBClient, DescribeParameterGroupsCommand, "NextToken", "NextToken", "MaxResults");
