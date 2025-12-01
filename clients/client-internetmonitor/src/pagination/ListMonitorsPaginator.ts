// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitorsCommand,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput,
} from "../commands/ListMonitorsCommand";
import { InternetMonitorClient } from "../InternetMonitorClient";
import { InternetMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitors: (
  config: InternetMonitorPaginationConfiguration,
  input: ListMonitorsCommandInput,
  ...rest: any[]
) => Paginator<ListMonitorsCommandOutput> = createPaginator<
  InternetMonitorPaginationConfiguration,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput
>(InternetMonitorClient, ListMonitorsCommand, "NextToken", "NextToken", "MaxResults");
