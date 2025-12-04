// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeTrafficSourcesCommand,
  DescribeTrafficSourcesCommandInput,
  DescribeTrafficSourcesCommandOutput,
} from "../commands/DescribeTrafficSourcesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTrafficSources: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeTrafficSourcesCommandInput,
  ...rest: any[]
) => Paginator<DescribeTrafficSourcesCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeTrafficSourcesCommandInput,
  DescribeTrafficSourcesCommandOutput
>(AutoScalingClient, DescribeTrafficSourcesCommand, "NextToken", "NextToken", "MaxRecords");
