// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeParametersCommand,
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
} from "../commands/DescribeParametersCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeParameters: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeParametersCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput
>(MemoryDBClient, DescribeParametersCommand, "NextToken", "NextToken", "MaxResults");
