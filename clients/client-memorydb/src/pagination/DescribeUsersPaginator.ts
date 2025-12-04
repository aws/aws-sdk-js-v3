// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "../commands/DescribeUsersCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeUsers: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeUsersCommandInput,
  ...rest: any[]
) => Paginator<DescribeUsersCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput
>(MemoryDBClient, DescribeUsersCommand, "NextToken", "NextToken", "MaxResults");
