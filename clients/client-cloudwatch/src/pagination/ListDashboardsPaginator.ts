// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "../commands/ListDashboardsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDashboards: (
  config: CloudWatchPaginationConfiguration,
  input: ListDashboardsCommandInput,
  ...rest: any[]
) => Paginator<ListDashboardsCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput
>(CloudWatchClient, ListDashboardsCommand, "NextToken", "NextToken", "");
