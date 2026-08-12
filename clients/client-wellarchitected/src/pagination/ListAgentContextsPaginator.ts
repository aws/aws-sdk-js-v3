// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgentContextsCommand,
  ListAgentContextsCommandInput,
  ListAgentContextsCommandOutput,
} from "../commands/ListAgentContextsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import type { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentContexts: (
  config: WellArchitectedPaginationConfiguration,
  input: ListAgentContextsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentContextsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListAgentContextsCommandInput,
  ListAgentContextsCommandOutput
>(WellArchitectedClient, ListAgentContextsCommand, "nextToken", "nextToken", "maxResults");
