// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListMemberAccountsCommand,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
} from "../commands/ListMemberAccountsCommand";
import { NotificationsClient } from "../NotificationsClient";
import { NotificationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMemberAccounts: (
  config: NotificationsPaginationConfiguration,
  input: ListMemberAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListMemberAccountsCommandOutput> = createPaginator<
  NotificationsPaginationConfiguration,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput
>(NotificationsClient, ListMemberAccountsCommand, "nextToken", "nextToken", "maxResults");
