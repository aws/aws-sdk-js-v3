// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgentRecommendationGenerationsCommand,
  ListAgentRecommendationGenerationsCommandInput,
  ListAgentRecommendationGenerationsCommandOutput,
} from "../commands/ListAgentRecommendationGenerationsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import type { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentRecommendationGenerations: (
  config: WellArchitectedPaginationConfiguration,
  input: ListAgentRecommendationGenerationsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentRecommendationGenerationsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListAgentRecommendationGenerationsCommandInput,
  ListAgentRecommendationGenerationsCommandOutput
>(WellArchitectedClient, ListAgentRecommendationGenerationsCommand, "nextToken", "nextToken", "maxResults");
