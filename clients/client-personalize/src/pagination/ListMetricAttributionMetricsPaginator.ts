// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMetricAttributionMetricsCommand,
  ListMetricAttributionMetricsCommandInput,
  ListMetricAttributionMetricsCommandOutput,
} from "../commands/ListMetricAttributionMetricsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetricAttributionMetrics: (
  config: PersonalizePaginationConfiguration,
  input: ListMetricAttributionMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListMetricAttributionMetricsCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListMetricAttributionMetricsCommandInput,
  ListMetricAttributionMetricsCommandOutput
>(PersonalizeClient, ListMetricAttributionMetricsCommand, "nextToken", "nextToken", "maxResults");
