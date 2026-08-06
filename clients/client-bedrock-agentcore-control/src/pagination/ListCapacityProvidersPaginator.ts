// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListCapacityProvidersCommand,
  ListCapacityProvidersCommandInput,
  ListCapacityProvidersCommandOutput,
} from "../commands/ListCapacityProvidersCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCapacityProviders: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListCapacityProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListCapacityProvidersCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListCapacityProvidersCommandInput,
  ListCapacityProvidersCommandOutput
>(BedrockAgentCoreControlClient, ListCapacityProvidersCommand, "nextToken", "nextToken", "maxResults");
