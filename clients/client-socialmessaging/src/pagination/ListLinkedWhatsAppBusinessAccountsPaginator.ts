// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLinkedWhatsAppBusinessAccountsCommand,
  ListLinkedWhatsAppBusinessAccountsCommandInput,
  ListLinkedWhatsAppBusinessAccountsCommandOutput,
} from "../commands/ListLinkedWhatsAppBusinessAccountsCommand";
import { SocialMessagingClient } from "../SocialMessagingClient";
import { SocialMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLinkedWhatsAppBusinessAccounts: (
  config: SocialMessagingPaginationConfiguration,
  input: ListLinkedWhatsAppBusinessAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListLinkedWhatsAppBusinessAccountsCommandOutput> = createPaginator<
  SocialMessagingPaginationConfiguration,
  ListLinkedWhatsAppBusinessAccountsCommandInput,
  ListLinkedWhatsAppBusinessAccountsCommandOutput
>(SocialMessagingClient, ListLinkedWhatsAppBusinessAccountsCommand, "nextToken", "nextToken", "maxResults");
