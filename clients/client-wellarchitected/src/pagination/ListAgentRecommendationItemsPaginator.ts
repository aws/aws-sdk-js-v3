// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgentRecommendationItemsCommand,
  ListAgentRecommendationItemsCommandInput,
  ListAgentRecommendationItemsCommandOutput,
} from "../commands/ListAgentRecommendationItemsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import type { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentRecommendationItems: (
  config: WellArchitectedPaginationConfiguration,
  input: ListAgentRecommendationItemsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentRecommendationItemsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListAgentRecommendationItemsCommandInput,
  ListAgentRecommendationItemsCommandOutput
>(WellArchitectedClient, ListAgentRecommendationItemsCommand, "nextToken", "nextToken", "maxResults");
