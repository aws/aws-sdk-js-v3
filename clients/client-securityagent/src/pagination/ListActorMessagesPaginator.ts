// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListActorMessagesCommand,
  ListActorMessagesCommandInput,
  ListActorMessagesCommandOutput,
} from "../commands/ListActorMessagesCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActorMessages: (
  config: SecurityAgentPaginationConfiguration,
  input: ListActorMessagesCommandInput,
  ...rest: any[]
) => Paginator<ListActorMessagesCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListActorMessagesCommandInput,
  ListActorMessagesCommandOutput
>(SecurityAgentClient, ListActorMessagesCommand, "nextToken", "nextToken", "maxResults");
