// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeJobLogItemsCommand,
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "../commands/DescribeJobLogItemsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeJobLogItems: (
  config: MgnPaginationConfiguration,
  input: DescribeJobLogItemsCommandInput,
  ...rest: any[]
) => Paginator<DescribeJobLogItemsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput
>(MgnClient, DescribeJobLogItemsCommand, "nextToken", "nextToken", "maxResults");
