// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBotRecommendationsCommand,
  ListBotRecommendationsCommandInput,
  ListBotRecommendationsCommandOutput,
} from "../commands/ListBotRecommendationsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBotRecommendations: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBotRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListBotRecommendationsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBotRecommendationsCommandInput,
  ListBotRecommendationsCommandOutput
>(LexModelsV2Client, ListBotRecommendationsCommand, "nextToken", "nextToken", "maxResults");
