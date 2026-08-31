// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchAppsCommand, SearchAppsCommandInput, SearchAppsCommandOutput } from "../commands/SearchAppsCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchApps: (
  config: QuickSightPaginationConfiguration,
  input: SearchAppsCommandInput,
  ...rest: any[]
) => Paginator<SearchAppsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchAppsCommandInput,
  SearchAppsCommandOutput
>(QuickSightClient, SearchAppsCommand, "NextToken", "NextToken", "MaxResults");
