// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApps: (
  config: QuickSightPaginationConfiguration,
  input: ListAppsCommandInput,
  ...rest: any[]
) => Paginator<ListAppsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListAppsCommandInput,
  ListAppsCommandOutput
>(QuickSightClient, ListAppsCommand, "NextToken", "NextToken", "MaxResults");
