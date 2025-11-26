// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPermissionSetProvisioningStatusCommand,
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
} from "../commands/ListPermissionSetProvisioningStatusCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPermissionSetProvisioningStatus: (
  config: SSOAdminPaginationConfiguration,
  input: ListPermissionSetProvisioningStatusCommandInput,
  ...rest: any[]
) => Paginator<ListPermissionSetProvisioningStatusCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput
>(SSOAdminClient, ListPermissionSetProvisioningStatusCommand, "NextToken", "NextToken", "MaxResults");
