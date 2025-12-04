// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIntentMetricsCommand,
  ListIntentMetricsCommandInput,
  ListIntentMetricsCommandOutput,
} from "../commands/ListIntentMetricsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIntentMetrics: (
  config: LexModelsV2PaginationConfiguration,
  input: ListIntentMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListIntentMetricsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListIntentMetricsCommandInput,
  ListIntentMetricsCommandOutput
>(LexModelsV2Client, ListIntentMetricsCommand, "nextToken", "nextToken", "maxResults");
