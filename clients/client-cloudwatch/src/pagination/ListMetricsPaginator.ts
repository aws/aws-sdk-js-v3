// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import { ListMetricsCommand, ListMetricsCommandInput, ListMetricsCommandOutput } from "../commands/ListMetricsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetrics: (
  config: CloudWatchPaginationConfiguration,
  input: ListMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListMetricsCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  ListMetricsCommandInput,
  ListMetricsCommandOutput
>(CloudWatchClient, ListMetricsCommand, "NextToken", "NextToken", "");
