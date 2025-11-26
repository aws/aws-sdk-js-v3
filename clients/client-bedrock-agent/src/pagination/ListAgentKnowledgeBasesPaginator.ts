// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListAgentKnowledgeBasesCommand,
  ListAgentKnowledgeBasesCommandInput,
  ListAgentKnowledgeBasesCommandOutput,
} from "../commands/ListAgentKnowledgeBasesCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentKnowledgeBases: (
  config: BedrockAgentPaginationConfiguration,
  input: ListAgentKnowledgeBasesCommandInput,
  ...rest: any[]
) => Paginator<ListAgentKnowledgeBasesCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListAgentKnowledgeBasesCommandInput,
  ListAgentKnowledgeBasesCommandOutput
>(BedrockAgentClient, ListAgentKnowledgeBasesCommand, "nextToken", "nextToken", "maxResults");
