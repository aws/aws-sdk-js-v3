// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchDashboardsCommand,
  SearchDashboardsCommandInput,
  SearchDashboardsCommandOutput,
} from "../commands/SearchDashboardsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchDashboards: (
  config: QuickSightPaginationConfiguration,
  input: SearchDashboardsCommandInput,
  ...rest: any[]
) => Paginator<SearchDashboardsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchDashboardsCommandInput,
  SearchDashboardsCommandOutput
>(QuickSightClient, SearchDashboardsCommand, "NextToken", "NextToken", "MaxResults");
