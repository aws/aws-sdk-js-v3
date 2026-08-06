// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListAgentRuntimeVersionsByCapacityProviderCommand,
  ListAgentRuntimeVersionsByCapacityProviderCommandInput,
  ListAgentRuntimeVersionsByCapacityProviderCommandOutput,
} from "../commands/ListAgentRuntimeVersionsByCapacityProviderCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentRuntimeVersionsByCapacityProvider: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListAgentRuntimeVersionsByCapacityProviderCommandInput,
  ...rest: any[]
) => Paginator<ListAgentRuntimeVersionsByCapacityProviderCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListAgentRuntimeVersionsByCapacityProviderCommandInput,
  ListAgentRuntimeVersionsByCapacityProviderCommandOutput
>(BedrockAgentCoreControlClient, ListAgentRuntimeVersionsByCapacityProviderCommand, "nextToken", "nextToken", "maxResults");
