// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSessionMetricsCommand,
  ListSessionMetricsCommandInput,
  ListSessionMetricsCommandOutput,
} from "../commands/ListSessionMetricsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessionMetrics: (
  config: LexModelsV2PaginationConfiguration,
  input: ListSessionMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionMetricsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListSessionMetricsCommandInput,
  ListSessionMetricsCommandOutput
>(LexModelsV2Client, ListSessionMetricsCommand, "nextToken", "nextToken", "maxResults");
