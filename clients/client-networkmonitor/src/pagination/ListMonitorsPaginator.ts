// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitorsCommand,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput,
} from "../commands/ListMonitorsCommand";
import { NetworkMonitorClient } from "../NetworkMonitorClient";
import { NetworkMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitors: (
  config: NetworkMonitorPaginationConfiguration,
  input: ListMonitorsCommandInput,
  ...rest: any[]
) => Paginator<ListMonitorsCommandOutput> = createPaginator<
  NetworkMonitorPaginationConfiguration,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput
>(NetworkMonitorClient, ListMonitorsCommand, "nextToken", "nextToken", "maxResults");
