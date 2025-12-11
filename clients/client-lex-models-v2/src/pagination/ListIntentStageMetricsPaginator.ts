// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIntentStageMetricsCommand,
  ListIntentStageMetricsCommandInput,
  ListIntentStageMetricsCommandOutput,
} from "../commands/ListIntentStageMetricsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIntentStageMetrics: (
  config: LexModelsV2PaginationConfiguration,
  input: ListIntentStageMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListIntentStageMetricsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListIntentStageMetricsCommandInput,
  ListIntentStageMetricsCommandOutput
>(LexModelsV2Client, ListIntentStageMetricsCommand, "nextToken", "nextToken", "maxResults");
