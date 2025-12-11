// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDashboardVersionsCommand,
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "../commands/ListDashboardVersionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDashboardVersions: (
  config: QuickSightPaginationConfiguration,
  input: ListDashboardVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListDashboardVersionsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput
>(QuickSightClient, ListDashboardVersionsCommand, "NextToken", "NextToken", "MaxResults");
