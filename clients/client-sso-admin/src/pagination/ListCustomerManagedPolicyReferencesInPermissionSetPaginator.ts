// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomerManagedPolicyReferencesInPermissionSetCommand,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
} from "../commands/ListCustomerManagedPolicyReferencesInPermissionSetCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomerManagedPolicyReferencesInPermissionSet: (
  config: SSOAdminPaginationConfiguration,
  input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ...rest: any[]
) => Paginator<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput
>(SSOAdminClient, ListCustomerManagedPolicyReferencesInPermissionSetCommand, "NextToken", "NextToken", "MaxResults");
