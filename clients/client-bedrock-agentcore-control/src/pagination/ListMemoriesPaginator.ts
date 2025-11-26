// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListMemoriesCommand,
  ListMemoriesCommandInput,
  ListMemoriesCommandOutput,
} from "../commands/ListMemoriesCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMemories: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListMemoriesCommandInput,
  ...rest: any[]
) => Paginator<ListMemoriesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListMemoriesCommandInput,
  ListMemoriesCommandOutput
>(BedrockAgentCoreControlClient, ListMemoriesCommand, "nextToken", "nextToken", "maxResults");
