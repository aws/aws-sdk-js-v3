// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "../commands/ListKnowledgeBasesCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKnowledgeBases: (
  config: BedrockAgentPaginationConfiguration,
  input: ListKnowledgeBasesCommandInput,
  ...rest: any[]
) => Paginator<ListKnowledgeBasesCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput
>(BedrockAgentClient, ListKnowledgeBasesCommand, "nextToken", "nextToken", "maxResults");
