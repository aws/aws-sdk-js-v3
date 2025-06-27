// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListMetricsCommand, ListMetricsCommandInput, ListMetricsCommandOutput } from "../commands/ListMetricsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetrics: (
  config: ResiliencehubPaginationConfiguration,
  input: ListMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListMetricsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListMetricsCommandInput,
  ListMetricsCommandOutput
>(ResiliencehubClient, ListMetricsCommand, "nextToken", "nextToken", "maxResults");
