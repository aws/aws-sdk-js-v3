// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListKnowledgeBaseDocumentsCommand,
  ListKnowledgeBaseDocumentsCommandInput,
  ListKnowledgeBaseDocumentsCommandOutput,
} from "../commands/ListKnowledgeBaseDocumentsCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKnowledgeBaseDocuments: (
  config: BedrockAgentPaginationConfiguration,
  input: ListKnowledgeBaseDocumentsCommandInput,
  ...rest: any[]
) => Paginator<ListKnowledgeBaseDocumentsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListKnowledgeBaseDocumentsCommandInput,
  ListKnowledgeBaseDocumentsCommandOutput
>(BedrockAgentClient, ListKnowledgeBaseDocumentsCommand, "nextToken", "nextToken", "maxResults");
