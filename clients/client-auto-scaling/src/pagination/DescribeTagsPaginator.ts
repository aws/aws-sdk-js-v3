// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "../commands/DescribeTagsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTags: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeTagsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTagsCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
>(AutoScalingClient, DescribeTagsCommand, "NextToken", "NextToken", "MaxRecords");
