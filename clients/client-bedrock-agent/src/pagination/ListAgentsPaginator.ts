// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import { ListAgentsCommand, ListAgentsCommandInput, ListAgentsCommandOutput } from "../commands/ListAgentsCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgents: (
  config: BedrockAgentPaginationConfiguration,
  input: ListAgentsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListAgentsCommandInput,
  ListAgentsCommandOutput
>(BedrockAgentClient, ListAgentsCommand, "nextToken", "nextToken", "maxResults");
