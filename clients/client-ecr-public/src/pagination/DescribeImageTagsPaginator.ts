// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeImageTagsCommand,
  DescribeImageTagsCommandInput,
  DescribeImageTagsCommandOutput,
} from "../commands/DescribeImageTagsCommand";
import { ECRPUBLICClient } from "../ECRPUBLICClient";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeImageTags: (
  config: ECRPUBLICPaginationConfiguration,
  input: DescribeImageTagsCommandInput,
  ...rest: any[]
) => Paginator<DescribeImageTagsCommandOutput> = createPaginator<
  ECRPUBLICPaginationConfiguration,
  DescribeImageTagsCommandInput,
  DescribeImageTagsCommandOutput
>(ECRPUBLICClient, DescribeImageTagsCommand, "nextToken", "nextToken", "maxResults");
