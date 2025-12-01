// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPermissionSetsProvisionedToAccountCommand,
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
} from "../commands/ListPermissionSetsProvisionedToAccountCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPermissionSetsProvisionedToAccount: (
  config: SSOAdminPaginationConfiguration,
  input: ListPermissionSetsProvisionedToAccountCommandInput,
  ...rest: any[]
) => Paginator<ListPermissionSetsProvisionedToAccountCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput
>(SSOAdminClient, ListPermissionSetsProvisionedToAccountCommand, "NextToken", "NextToken", "MaxResults");
