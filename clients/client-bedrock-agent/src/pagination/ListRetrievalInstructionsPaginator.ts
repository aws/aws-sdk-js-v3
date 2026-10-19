// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListRetrievalInstructionsCommand,
  ListRetrievalInstructionsCommandInput,
  ListRetrievalInstructionsCommandOutput,
} from "../commands/ListRetrievalInstructionsCommand";
import type { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRetrievalInstructions: (
  config: BedrockAgentPaginationConfiguration,
  input: ListRetrievalInstructionsCommandInput,
  ...rest: any[]
) => Paginator<ListRetrievalInstructionsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListRetrievalInstructionsCommandInput,
  ListRetrievalInstructionsCommandOutput
>(BedrockAgentClient, ListRetrievalInstructionsCommand, "nextToken", "nextToken", "maxResults");
