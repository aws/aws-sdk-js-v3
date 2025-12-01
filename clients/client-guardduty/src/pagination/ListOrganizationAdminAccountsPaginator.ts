// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationAdminAccounts: (
  config: GuardDutyPaginationConfiguration,
  input: ListOrganizationAdminAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationAdminAccountsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput
>(GuardDutyClient, ListOrganizationAdminAccountsCommand, "NextToken", "NextToken", "MaxResults");
