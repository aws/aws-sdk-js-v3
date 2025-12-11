// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEmailContactsCommand,
  ListEmailContactsCommandInput,
  ListEmailContactsCommandOutput,
} from "../commands/ListEmailContactsCommand";
import { NotificationsContactsClient } from "../NotificationsContactsClient";
import { NotificationsContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEmailContacts: (
  config: NotificationsContactsPaginationConfiguration,
  input: ListEmailContactsCommandInput,
  ...rest: any[]
) => Paginator<ListEmailContactsCommandOutput> = createPaginator<
  NotificationsContactsPaginationConfiguration,
  ListEmailContactsCommandInput,
  ListEmailContactsCommandOutput
>(NotificationsContactsClient, ListEmailContactsCommand, "nextToken", "nextToken", "maxResults");
