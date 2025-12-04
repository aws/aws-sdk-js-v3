// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountsForProvisionedPermissionSetCommand,
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput,
} from "../commands/ListAccountsForProvisionedPermissionSetCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountsForProvisionedPermissionSet: (
  config: SSOAdminPaginationConfiguration,
  input: ListAccountsForProvisionedPermissionSetCommandInput,
  ...rest: any[]
) => Paginator<ListAccountsForProvisionedPermissionSetCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput
>(SSOAdminClient, ListAccountsForProvisionedPermissionSetCommand, "NextToken", "NextToken", "MaxResults");
