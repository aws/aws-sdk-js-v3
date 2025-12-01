// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomPermissionsCommand,
  ListCustomPermissionsCommandInput,
  ListCustomPermissionsCommandOutput,
} from "../commands/ListCustomPermissionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomPermissions: (
  config: QuickSightPaginationConfiguration,
  input: ListCustomPermissionsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomPermissionsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListCustomPermissionsCommandInput,
  ListCustomPermissionsCommandOutput
>(QuickSightClient, ListCustomPermissionsCommand, "NextToken", "NextToken", "MaxResults");
