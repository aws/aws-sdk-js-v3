// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetQueryResultsWorkloadInsightsTopContributorsDataCommand,
  GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
  GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput,
} from "../commands/GetQueryResultsWorkloadInsightsTopContributorsDataCommand";
import { NetworkFlowMonitorClient } from "../NetworkFlowMonitorClient";
import { NetworkFlowMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetQueryResultsWorkloadInsightsTopContributorsData: (
  config: NetworkFlowMonitorPaginationConfiguration,
  input: GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
  ...rest: any[]
) => Paginator<GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput> = createPaginator<
  NetworkFlowMonitorPaginationConfiguration,
  GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
  GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput
>(NetworkFlowMonitorClient, GetQueryResultsWorkloadInsightsTopContributorsDataCommand, "nextToken", "nextToken", "maxResults");
