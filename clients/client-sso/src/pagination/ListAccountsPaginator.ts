// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "../commands/ListAccountsCommand";
import { SSOClient } from "../SSOClient";
import { SSOPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccounts: (
  config: SSOPaginationConfiguration,
  input: ListAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListAccountsCommandOutput> = createPaginator<
  SSOPaginationConfiguration,
  ListAccountsCommandInput,
  ListAccountsCommandOutput
>(SSOClient, ListAccountsCommand, "nextToken", "nextToken", "maxResults");
