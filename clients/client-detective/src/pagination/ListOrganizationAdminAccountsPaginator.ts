// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationAdminAccounts: (
  config: DetectivePaginationConfiguration,
  input: ListOrganizationAdminAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationAdminAccountsCommandOutput> = createPaginator<
  DetectivePaginationConfiguration,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput
>(DetectiveClient, ListOrganizationAdminAccountsCommand, "NextToken", "NextToken", "MaxResults");
