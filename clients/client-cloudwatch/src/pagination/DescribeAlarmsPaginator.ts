// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  DescribeAlarmsCommand,
  DescribeAlarmsCommandInput,
  DescribeAlarmsCommandOutput,
} from "../commands/DescribeAlarmsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAlarms: (
  config: CloudWatchPaginationConfiguration,
  input: DescribeAlarmsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAlarmsCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  DescribeAlarmsCommandInput,
  DescribeAlarmsCommandOutput
>(CloudWatchClient, DescribeAlarmsCommand, "NextToken", "NextToken", "MaxRecords");
