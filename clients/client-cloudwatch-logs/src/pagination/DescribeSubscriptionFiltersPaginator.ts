// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeSubscriptionFiltersCommand,
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
} from "../commands/DescribeSubscriptionFiltersCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSubscriptionFilters: (
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeSubscriptionFiltersCommandInput,
  ...rest: any[]
) => Paginator<DescribeSubscriptionFiltersCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput
>(CloudWatchLogsClient, DescribeSubscriptionFiltersCommand, "nextToken", "nextToken", "limit");
