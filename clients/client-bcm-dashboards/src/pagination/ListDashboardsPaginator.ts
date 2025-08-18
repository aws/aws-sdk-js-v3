// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BCMDashboardsClient } from "../BCMDashboardsClient";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "../commands/ListDashboardsCommand";
import { BCMDashboardsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDashboards: (
  config: BCMDashboardsPaginationConfiguration,
  input: ListDashboardsCommandInput,
  ...rest: any[]
) => Paginator<ListDashboardsCommandOutput> = createPaginator<
  BCMDashboardsPaginationConfiguration,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput
>(BCMDashboardsClient, ListDashboardsCommand, "nextToken", "nextToken", "maxResults");
