// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ACMClient } from "../ACMClient";
import {
  ListAcmeAccountsCommand,
  ListAcmeAccountsCommandInput,
  ListAcmeAccountsCommandOutput,
} from "../commands/ListAcmeAccountsCommand";
import type { ACMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAcmeAccounts: (
  config: ACMPaginationConfiguration,
  input: ListAcmeAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListAcmeAccountsCommandOutput> = createPaginator<
  ACMPaginationConfiguration,
  ListAcmeAccountsCommandInput,
  ListAcmeAccountsCommandOutput
>(ACMClient, ListAcmeAccountsCommand, "NextToken", "NextToken", "MaxResults");
