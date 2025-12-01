// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAdminAccountsForOrganizationCommand,
  ListAdminAccountsForOrganizationCommandInput,
  ListAdminAccountsForOrganizationCommandOutput,
} from "../commands/ListAdminAccountsForOrganizationCommand";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAdminAccountsForOrganization: (
  config: FMSPaginationConfiguration,
  input: ListAdminAccountsForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<ListAdminAccountsForOrganizationCommandOutput> = createPaginator<
  FMSPaginationConfiguration,
  ListAdminAccountsForOrganizationCommandInput,
  ListAdminAccountsForOrganizationCommandOutput
>(FMSClient, ListAdminAccountsForOrganizationCommand, "NextToken", "NextToken", "MaxResults");
