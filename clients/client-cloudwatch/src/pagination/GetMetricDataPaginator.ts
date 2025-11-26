// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  GetMetricDataCommand,
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput,
} from "../commands/GetMetricDataCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetMetricData: (
  config: CloudWatchPaginationConfiguration,
  input: GetMetricDataCommandInput,
  ...rest: any[]
) => Paginator<GetMetricDataCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput
>(CloudWatchClient, GetMetricDataCommand, "NextToken", "NextToken", "MaxDatapoints");
