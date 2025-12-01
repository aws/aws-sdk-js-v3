// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessions: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListSessionsCommandInput,
  ListSessionsCommandOutput
>(BedrockAgentCoreClient, ListSessionsCommand, "nextToken", "nextToken", "maxResults");
