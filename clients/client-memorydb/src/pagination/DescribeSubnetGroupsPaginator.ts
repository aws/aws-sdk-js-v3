// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSubnetGroupsCommand,
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput,
} from "../commands/DescribeSubnetGroupsCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSubnetGroups: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeSubnetGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSubnetGroupsCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput
>(MemoryDBClient, DescribeSubnetGroupsCommand, "NextToken", "NextToken", "MaxResults");
