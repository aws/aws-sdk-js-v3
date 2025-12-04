// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  DescribeInsightRulesCommand,
  DescribeInsightRulesCommandInput,
  DescribeInsightRulesCommandOutput,
} from "../commands/DescribeInsightRulesCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInsightRules: (
  config: CloudWatchPaginationConfiguration,
  input: DescribeInsightRulesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInsightRulesCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  DescribeInsightRulesCommandInput,
  DescribeInsightRulesCommandOutput
>(CloudWatchClient, DescribeInsightRulesCommand, "NextToken", "NextToken", "MaxResults");
