// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMemberAccountsCommand,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
} from "../commands/ListMemberAccountsCommand";
import { FMSClient } from "../FMSClient";
import type { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMemberAccounts: (
  config: FMSPaginationConfiguration,
  input: ListMemberAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListMemberAccountsCommandOutput> = createPaginator<
  FMSPaginationConfiguration,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput
>(FMSClient, ListMemberAccountsCommand, "NextToken", "NextToken", "MaxResults");
