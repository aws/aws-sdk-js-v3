// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListMetricsCommand, ListMetricsCommandInput, ListMetricsCommandOutput } from "../commands/ListMetricsCommand";
import { ConnectClient } from "../ConnectClient";
import type { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetrics: (
  config: ConnectPaginationConfiguration,
  input: ListMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListMetricsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListMetricsCommandInput,
  ListMetricsCommandOutput
>(ConnectClient, ListMetricsCommand, "NextToken", "NextToken", "MaxResults");
