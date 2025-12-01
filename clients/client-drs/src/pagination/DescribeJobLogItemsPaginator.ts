// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeJobLogItemsCommand,
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "../commands/DescribeJobLogItemsCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeJobLogItems: (
  config: DrsPaginationConfiguration,
  input: DescribeJobLogItemsCommandInput,
  ...rest: any[]
) => Paginator<DescribeJobLogItemsCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput
>(DrsClient, DescribeJobLogItemsCommand, "nextToken", "nextToken", "maxResults");
