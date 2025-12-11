// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPermissionSetsCommand,
  ListPermissionSetsCommandInput,
  ListPermissionSetsCommandOutput,
} from "../commands/ListPermissionSetsCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPermissionSets: (
  config: SSOAdminPaginationConfiguration,
  input: ListPermissionSetsCommandInput,
  ...rest: any[]
) => Paginator<ListPermissionSetsCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListPermissionSetsCommandInput,
  ListPermissionSetsCommandOutput
>(SSOAdminClient, ListPermissionSetsCommand, "NextToken", "NextToken", "MaxResults");
