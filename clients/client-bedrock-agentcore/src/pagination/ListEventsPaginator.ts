// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import { ListEventsCommand, ListEventsCommandInput, ListEventsCommandOutput } from "../commands/ListEventsCommand";
import { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEvents: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListEventsCommandInput,
  ...rest: any[]
) => Paginator<ListEventsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListEventsCommandInput,
  ListEventsCommandOutput
>(BedrockAgentCoreClient, ListEventsCommand, "nextToken", "nextToken", "maxResults");
