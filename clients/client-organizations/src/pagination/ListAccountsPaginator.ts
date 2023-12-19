// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "../commands/ListAccountsCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccounts: (
  config: OrganizationsPaginationConfiguration,
  input: ListAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListAccountsCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListAccountsCommandInput,
  ListAccountsCommandOutput
>(OrganizationsClient, ListAccountsCommand, "NextToken", "NextToken", "MaxResults");
