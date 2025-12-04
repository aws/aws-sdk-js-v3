// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import { ListPromptsCommand, ListPromptsCommandInput, ListPromptsCommandOutput } from "../commands/ListPromptsCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrompts: (
  config: BedrockAgentPaginationConfiguration,
  input: ListPromptsCommandInput,
  ...rest: any[]
) => Paginator<ListPromptsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListPromptsCommandInput,
  ListPromptsCommandOutput
>(BedrockAgentClient, ListPromptsCommand, "nextToken", "nextToken", "maxResults");
