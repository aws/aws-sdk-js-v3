// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchMetricsCommand,
  SearchMetricsCommandInput,
  SearchMetricsCommandOutput,
} from "../commands/SearchMetricsCommand";
import { ConnectClient } from "../ConnectClient";
import type { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchMetrics: (
  config: ConnectPaginationConfiguration,
  input: SearchMetricsCommandInput,
  ...rest: any[]
) => Paginator<SearchMetricsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchMetricsCommandInput,
  SearchMetricsCommandOutput
>(ConnectClient, SearchMetricsCommand, "NextToken", "NextToken", "MaxResults");
