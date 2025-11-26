// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationAdminAccounts: (
  config: Macie2PaginationConfiguration,
  input: ListOrganizationAdminAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationAdminAccountsCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput
>(Macie2Client, ListOrganizationAdminAccountsCommand, "nextToken", "nextToken", "maxResults");
