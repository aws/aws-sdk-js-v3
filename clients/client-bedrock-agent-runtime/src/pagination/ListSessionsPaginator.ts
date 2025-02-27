// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentRuntimeClient } from "../BedrockAgentRuntimeClient";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { BedrockAgentRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessions: (
  config: BedrockAgentRuntimePaginationConfiguration,
  input: ListSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsCommandOutput> = createPaginator<
  BedrockAgentRuntimePaginationConfiguration,
  ListSessionsCommandInput,
  ListSessionsCommandOutput
>(BedrockAgentRuntimeClient, ListSessionsCommand, "nextToken", "nextToken", "maxResults");
