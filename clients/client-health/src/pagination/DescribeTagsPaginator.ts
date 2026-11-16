// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "../commands/DescribeTagsCommand";
import { HealthClient } from "../HealthClient";
import type { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTags: (
  config: HealthPaginationConfiguration,
  input: DescribeTagsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTagsCommandOutput> = createPaginator<
  HealthPaginationConfiguration,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
>(HealthClient, DescribeTagsCommand, "nextToken", "nextToken", "maxResults");
