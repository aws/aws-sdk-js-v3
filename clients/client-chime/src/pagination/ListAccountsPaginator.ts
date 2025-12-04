// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "../commands/ListAccountsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccounts: (
  config: ChimePaginationConfiguration,
  input: ListAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListAccountsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListAccountsCommandInput,
  ListAccountsCommandOutput
>(ChimeClient, ListAccountsCommand, "NextToken", "NextToken", "MaxResults");
