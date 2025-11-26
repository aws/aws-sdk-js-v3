// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUtteranceMetricsCommand,
  ListUtteranceMetricsCommandInput,
  ListUtteranceMetricsCommandOutput,
} from "../commands/ListUtteranceMetricsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUtteranceMetrics: (
  config: LexModelsV2PaginationConfiguration,
  input: ListUtteranceMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListUtteranceMetricsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListUtteranceMetricsCommandInput,
  ListUtteranceMetricsCommandOutput
>(LexModelsV2Client, ListUtteranceMetricsCommand, "nextToken", "nextToken", "maxResults");
