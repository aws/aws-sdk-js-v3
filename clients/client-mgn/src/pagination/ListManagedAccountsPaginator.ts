// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedAccountsCommand,
  ListManagedAccountsCommandInput,
  ListManagedAccountsCommandOutput,
} from "../commands/ListManagedAccountsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedAccounts: (
  config: MgnPaginationConfiguration,
  input: ListManagedAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedAccountsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListManagedAccountsCommandInput,
  ListManagedAccountsCommandOutput
>(MgnClient, ListManagedAccountsCommand, "nextToken", "nextToken", "maxResults");
