// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  DescribeAlarmHistoryCommand,
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput,
} from "../commands/DescribeAlarmHistoryCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAlarmHistory: (
  config: CloudWatchPaginationConfiguration,
  input: DescribeAlarmHistoryCommandInput,
  ...rest: any[]
) => Paginator<DescribeAlarmHistoryCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput
>(CloudWatchClient, DescribeAlarmHistoryCommand, "NextToken", "NextToken", "MaxRecords");
