// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationAdminAccounts: (
  config: SecurityHubPaginationConfiguration,
  input: ListOrganizationAdminAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationAdminAccountsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput
>(SecurityHubClient, ListOrganizationAdminAccountsCommand, "NextToken", "NextToken", "MaxResults");
