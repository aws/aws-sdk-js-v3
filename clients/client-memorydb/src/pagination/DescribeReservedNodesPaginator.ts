// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedNodesCommand,
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "../commands/DescribeReservedNodesCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedNodes: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeReservedNodesCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedNodesCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput
>(MemoryDBClient, DescribeReservedNodesCommand, "NextToken", "NextToken", "MaxResults");
