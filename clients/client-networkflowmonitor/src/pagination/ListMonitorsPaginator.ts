// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitorsCommand,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput,
} from "../commands/ListMonitorsCommand";
import { NetworkFlowMonitorClient } from "../NetworkFlowMonitorClient";
import { NetworkFlowMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitors: (
  config: NetworkFlowMonitorPaginationConfiguration,
  input: ListMonitorsCommandInput,
  ...rest: any[]
) => Paginator<ListMonitorsCommandOutput> = createPaginator<
  NetworkFlowMonitorPaginationConfiguration,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput
>(NetworkFlowMonitorClient, ListMonitorsCommand, "nextToken", "nextToken", "maxResults");
