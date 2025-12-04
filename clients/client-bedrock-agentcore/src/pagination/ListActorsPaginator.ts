// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import { ListActorsCommand, ListActorsCommandInput, ListActorsCommandOutput } from "../commands/ListActorsCommand";
import { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActors: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListActorsCommandInput,
  ...rest: any[]
) => Paginator<ListActorsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListActorsCommandInput,
  ListActorsCommandOutput
>(BedrockAgentCoreClient, ListActorsCommand, "nextToken", "nextToken", "maxResults");
