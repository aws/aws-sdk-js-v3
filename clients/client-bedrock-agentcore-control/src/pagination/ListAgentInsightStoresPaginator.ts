// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListAgentInsightStoresCommand,
  ListAgentInsightStoresCommandInput,
  ListAgentInsightStoresCommandOutput,
} from "../commands/ListAgentInsightStoresCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentInsightStores: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListAgentInsightStoresCommandInput,
  ...rest: any[]
) => Paginator<ListAgentInsightStoresCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListAgentInsightStoresCommandInput,
  ListAgentInsightStoresCommandOutput
>(BedrockAgentCoreControlClient, ListAgentInsightStoresCommand, "nextToken", "nextToken", "maxResults");
