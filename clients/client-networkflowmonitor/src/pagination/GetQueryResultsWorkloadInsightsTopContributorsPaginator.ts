// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetQueryResultsWorkloadInsightsTopContributorsCommand,
  GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
  GetQueryResultsWorkloadInsightsTopContributorsCommandOutput,
} from "../commands/GetQueryResultsWorkloadInsightsTopContributorsCommand";
import { NetworkFlowMonitorClient } from "../NetworkFlowMonitorClient";
import { NetworkFlowMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetQueryResultsWorkloadInsightsTopContributors: (
  config: NetworkFlowMonitorPaginationConfiguration,
  input: GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
  ...rest: any[]
) => Paginator<GetQueryResultsWorkloadInsightsTopContributorsCommandOutput> = createPaginator<
  NetworkFlowMonitorPaginationConfiguration,
  GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
  GetQueryResultsWorkloadInsightsTopContributorsCommandOutput
>(
  NetworkFlowMonitorClient,
  GetQueryResultsWorkloadInsightsTopContributorsCommand,
  "nextToken",
  "nextToken",
  "maxResults"
);
