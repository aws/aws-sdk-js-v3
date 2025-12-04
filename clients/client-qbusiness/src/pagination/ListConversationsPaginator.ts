// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConversationsCommand,
  ListConversationsCommandInput,
  ListConversationsCommandOutput,
} from "../commands/ListConversationsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConversations: (
  config: QBusinessPaginationConfiguration,
  input: ListConversationsCommandInput,
  ...rest: any[]
) => Paginator<ListConversationsCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListConversationsCommandInput,
  ListConversationsCommandOutput
>(QBusinessClient, ListConversationsCommand, "nextToken", "nextToken", "maxResults");
