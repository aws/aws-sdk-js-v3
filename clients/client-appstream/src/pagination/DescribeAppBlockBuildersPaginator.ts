// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppStreamClient } from "../AppStreamClient";
import {
  DescribeAppBlockBuildersCommand,
  DescribeAppBlockBuildersCommandInput,
  DescribeAppBlockBuildersCommandOutput,
} from "../commands/DescribeAppBlockBuildersCommand";
import { AppStreamPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAppBlockBuilders: (
  config: AppStreamPaginationConfiguration,
  input: DescribeAppBlockBuildersCommandInput,
  ...rest: any[]
) => Paginator<DescribeAppBlockBuildersCommandOutput> = createPaginator<
  AppStreamPaginationConfiguration,
  DescribeAppBlockBuildersCommandInput,
  DescribeAppBlockBuildersCommandOutput
>(AppStreamClient, DescribeAppBlockBuildersCommand, "NextToken", "NextToken", "MaxResults");
