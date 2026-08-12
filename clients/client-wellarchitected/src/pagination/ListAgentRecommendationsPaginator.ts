// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgentRecommendationsCommand,
  ListAgentRecommendationsCommandInput,
  ListAgentRecommendationsCommandOutput,
} from "../commands/ListAgentRecommendationsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import type { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentRecommendations: (
  config: WellArchitectedPaginationConfiguration,
  input: ListAgentRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentRecommendationsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListAgentRecommendationsCommandInput,
  ListAgentRecommendationsCommandOutput
>(WellArchitectedClient, ListAgentRecommendationsCommand, "nextToken", "nextToken", "maxResults");
