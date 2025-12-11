// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeACLsCommand,
  DescribeACLsCommandInput,
  DescribeACLsCommandOutput,
} from "../commands/DescribeACLsCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeACLs: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeACLsCommandInput,
  ...rest: any[]
) => Paginator<DescribeACLsCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeACLsCommandInput,
  DescribeACLsCommandOutput
>(MemoryDBClient, DescribeACLsCommand, "NextToken", "NextToken", "MaxResults");
