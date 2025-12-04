// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeServiceUpdatesCommand,
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "../commands/DescribeServiceUpdatesCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServiceUpdates: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeServiceUpdatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeServiceUpdatesCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput
>(MemoryDBClient, DescribeServiceUpdatesCommand, "NextToken", "NextToken", "MaxResults");
