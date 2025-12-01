// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTimeSeriesServiceStatisticsCommand,
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
} from "../commands/GetTimeSeriesServiceStatisticsCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTimeSeriesServiceStatistics: (
  config: XRayPaginationConfiguration,
  input: GetTimeSeriesServiceStatisticsCommandInput,
  ...rest: any[]
) => Paginator<GetTimeSeriesServiceStatisticsCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput
>(XRayClient, GetTimeSeriesServiceStatisticsCommand, "NextToken", "NextToken", "");
