// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "../commands/ListDashboardsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDashboards: (
  config: QuickSightPaginationConfiguration,
  input: ListDashboardsCommandInput,
  ...rest: any[]
) => Paginator<ListDashboardsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput
>(QuickSightClient, ListDashboardsCommand, "NextToken", "NextToken", "MaxResults");
