// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListRetrievalInstructionVersionsCommand,
  ListRetrievalInstructionVersionsCommandInput,
  ListRetrievalInstructionVersionsCommandOutput,
} from "../commands/ListRetrievalInstructionVersionsCommand";
import type { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRetrievalInstructionVersions: (
  config: BedrockAgentPaginationConfiguration,
  input: ListRetrievalInstructionVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListRetrievalInstructionVersionsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListRetrievalInstructionVersionsCommandInput,
  ListRetrievalInstructionVersionsCommandOutput
>(BedrockAgentClient, ListRetrievalInstructionVersionsCommand, "nextToken", "nextToken", "maxResults");
