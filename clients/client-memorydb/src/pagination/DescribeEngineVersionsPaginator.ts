// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEngineVersionsCommand,
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "../commands/DescribeEngineVersionsCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEngineVersions: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeEngineVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEngineVersionsCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput
>(MemoryDBClient, DescribeEngineVersionsCommand, "NextToken", "NextToken", "MaxResults");
