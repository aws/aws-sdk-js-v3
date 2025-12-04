// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutomatedDiscoveryAccountsCommand,
  ListAutomatedDiscoveryAccountsCommandInput,
  ListAutomatedDiscoveryAccountsCommandOutput,
} from "../commands/ListAutomatedDiscoveryAccountsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomatedDiscoveryAccounts: (
  config: Macie2PaginationConfiguration,
  input: ListAutomatedDiscoveryAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListAutomatedDiscoveryAccountsCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListAutomatedDiscoveryAccountsCommandInput,
  ListAutomatedDiscoveryAccountsCommandOutput
>(Macie2Client, ListAutomatedDiscoveryAccountsCommand, "nextToken", "nextToken", "maxResults");
