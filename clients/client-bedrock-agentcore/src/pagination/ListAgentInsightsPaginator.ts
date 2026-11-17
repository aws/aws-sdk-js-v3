// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import {
  ListAgentInsightsCommand,
  ListAgentInsightsCommandInput,
  ListAgentInsightsCommandOutput,
} from "../commands/ListAgentInsightsCommand";
import type { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentInsights: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListAgentInsightsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentInsightsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListAgentInsightsCommandInput,
  ListAgentInsightsCommandOutput
>(BedrockAgentCoreClient, ListAgentInsightsCommand, "nextToken", "nextToken", "maxResults");
