// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchCustomerAccountsCommand,
  SearchCustomerAccountsCommandInput,
  SearchCustomerAccountsCommandOutput,
} from "../commands/SearchCustomerAccountsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import type { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchCustomerAccounts: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: SearchCustomerAccountsCommandInput,
  ...rest: any[]
) => Paginator<SearchCustomerAccountsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  SearchCustomerAccountsCommandInput,
  SearchCustomerAccountsCommandOutput
>(PartnerCentralSellingClient, SearchCustomerAccountsCommand, "NextToken", "NextToken", "MaxResults");
