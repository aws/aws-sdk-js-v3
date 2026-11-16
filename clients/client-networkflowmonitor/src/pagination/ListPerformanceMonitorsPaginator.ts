// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPerformanceMonitorsCommand,
  ListPerformanceMonitorsCommandInput,
  ListPerformanceMonitorsCommandOutput,
} from "../commands/ListPerformanceMonitorsCommand";
import { NetworkFlowMonitorClient } from "../NetworkFlowMonitorClient";
import type { NetworkFlowMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPerformanceMonitors: (
  config: NetworkFlowMonitorPaginationConfiguration,
  input: ListPerformanceMonitorsCommandInput,
  ...rest: any[]
) => Paginator<ListPerformanceMonitorsCommandOutput> = createPaginator<
  NetworkFlowMonitorPaginationConfiguration,
  ListPerformanceMonitorsCommandInput,
  ListPerformanceMonitorsCommandOutput
>(NetworkFlowMonitorClient, ListPerformanceMonitorsCommand, "nextToken", "nextToken", "maxResults");
