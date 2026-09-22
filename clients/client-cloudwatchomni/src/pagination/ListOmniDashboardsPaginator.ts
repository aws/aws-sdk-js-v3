// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  ListOmniDashboardsCommand,
  ListOmniDashboardsCommandInput,
  ListOmniDashboardsCommandOutput,
} from "../commands/ListOmniDashboardsCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOmniDashboards: (
  config: CloudWatchOmniPaginationConfiguration,
  input: ListOmniDashboardsCommandInput,
  ...rest: any[]
) => Paginator<ListOmniDashboardsCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  ListOmniDashboardsCommandInput,
  ListOmniDashboardsCommandOutput
>(CloudWatchOmniClient, ListOmniDashboardsCommand, "nextToken", "nextToken", "maxResults");
