// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDelegatedAdminAccountsCommand,
  ListDelegatedAdminAccountsCommandInput,
  ListDelegatedAdminAccountsCommandOutput,
} from "../commands/ListDelegatedAdminAccountsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDelegatedAdminAccounts: (
  config: Inspector2PaginationConfiguration,
  input: ListDelegatedAdminAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListDelegatedAdminAccountsCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListDelegatedAdminAccountsCommandInput,
  ListDelegatedAdminAccountsCommandOutput
>(Inspector2Client, ListDelegatedAdminAccountsCommand, "nextToken", "nextToken", "maxResults");
