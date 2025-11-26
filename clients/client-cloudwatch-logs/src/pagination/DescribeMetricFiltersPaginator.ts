// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeMetricFiltersCommand,
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
} from "../commands/DescribeMetricFiltersCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMetricFilters: (
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeMetricFiltersCommandInput,
  ...rest: any[]
) => Paginator<DescribeMetricFiltersCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput
>(CloudWatchLogsClient, DescribeMetricFiltersCommand, "nextToken", "nextToken", "limit");
