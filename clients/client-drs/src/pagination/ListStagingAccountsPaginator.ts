// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStagingAccountsCommand,
  ListStagingAccountsCommandInput,
  ListStagingAccountsCommandOutput,
} from "../commands/ListStagingAccountsCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStagingAccounts: (
  config: DrsPaginationConfiguration,
  input: ListStagingAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListStagingAccountsCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  ListStagingAccountsCommandInput,
  ListStagingAccountsCommandOutput
>(DrsClient, ListStagingAccountsCommand, "nextToken", "nextToken", "maxResults");
