// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedPoliciesInPermissionSetCommand,
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput,
} from "../commands/ListManagedPoliciesInPermissionSetCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedPoliciesInPermissionSet: (
  config: SSOAdminPaginationConfiguration,
  input: ListManagedPoliciesInPermissionSetCommandInput,
  ...rest: any[]
) => Paginator<ListManagedPoliciesInPermissionSetCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput
>(SSOAdminClient, ListManagedPoliciesInPermissionSetCommand, "NextToken", "NextToken", "MaxResults");
