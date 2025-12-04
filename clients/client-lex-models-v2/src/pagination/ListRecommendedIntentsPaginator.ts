// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendedIntentsCommand,
  ListRecommendedIntentsCommandInput,
  ListRecommendedIntentsCommandOutput,
} from "../commands/ListRecommendedIntentsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendedIntents: (
  config: LexModelsV2PaginationConfiguration,
  input: ListRecommendedIntentsCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendedIntentsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListRecommendedIntentsCommandInput,
  ListRecommendedIntentsCommandOutput
>(LexModelsV2Client, ListRecommendedIntentsCommand, "nextToken", "nextToken", "maxResults");
