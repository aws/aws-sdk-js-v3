// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetQueryResultsPerformanceMonitorCommand,
  GetQueryResultsPerformanceMonitorCommandInput,
  GetQueryResultsPerformanceMonitorCommandOutput,
} from "../commands/GetQueryResultsPerformanceMonitorCommand";
import { NetworkFlowMonitorClient } from "../NetworkFlowMonitorClient";
import type { NetworkFlowMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetQueryResultsPerformanceMonitor: (
  config: NetworkFlowMonitorPaginationConfiguration,
  input: GetQueryResultsPerformanceMonitorCommandInput,
  ...rest: any[]
) => Paginator<GetQueryResultsPerformanceMonitorCommandOutput> = createPaginator<
  NetworkFlowMonitorPaginationConfiguration,
  GetQueryResultsPerformanceMonitorCommandInput,
  GetQueryResultsPerformanceMonitorCommandOutput
>(NetworkFlowMonitorClient, GetQueryResultsPerformanceMonitorCommand, "nextToken", "nextToken", "maxResults");
