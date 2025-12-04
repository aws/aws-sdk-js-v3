// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListAgentRuntimeVersionsCommand,
  ListAgentRuntimeVersionsCommandInput,
  ListAgentRuntimeVersionsCommandOutput,
} from "../commands/ListAgentRuntimeVersionsCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentRuntimeVersions: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListAgentRuntimeVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentRuntimeVersionsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListAgentRuntimeVersionsCommandInput,
  ListAgentRuntimeVersionsCommandOutput
>(BedrockAgentCoreControlClient, ListAgentRuntimeVersionsCommand, "nextToken", "nextToken", "maxResults");
