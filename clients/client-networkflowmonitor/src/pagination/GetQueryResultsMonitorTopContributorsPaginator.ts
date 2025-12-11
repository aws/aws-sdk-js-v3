// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetQueryResultsMonitorTopContributorsCommand,
  GetQueryResultsMonitorTopContributorsCommandInput,
  GetQueryResultsMonitorTopContributorsCommandOutput,
} from "../commands/GetQueryResultsMonitorTopContributorsCommand";
import { NetworkFlowMonitorClient } from "../NetworkFlowMonitorClient";
import { NetworkFlowMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetQueryResultsMonitorTopContributors: (
  config: NetworkFlowMonitorPaginationConfiguration,
  input: GetQueryResultsMonitorTopContributorsCommandInput,
  ...rest: any[]
) => Paginator<GetQueryResultsMonitorTopContributorsCommandOutput> = createPaginator<
  NetworkFlowMonitorPaginationConfiguration,
  GetQueryResultsMonitorTopContributorsCommandInput,
  GetQueryResultsMonitorTopContributorsCommandOutput
>(NetworkFlowMonitorClient, GetQueryResultsMonitorTopContributorsCommand, "nextToken", "nextToken", "maxResults");
