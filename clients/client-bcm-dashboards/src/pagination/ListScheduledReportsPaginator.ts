// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BCMDashboardsClient } from "../BCMDashboardsClient";
import {
  ListScheduledReportsCommand,
  ListScheduledReportsCommandInput,
  ListScheduledReportsCommandOutput,
} from "../commands/ListScheduledReportsCommand";
import type { BCMDashboardsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScheduledReports: (
  config: BCMDashboardsPaginationConfiguration,
  input: ListScheduledReportsCommandInput,
  ...rest: any[]
) => Paginator<ListScheduledReportsCommandOutput> = createPaginator<
  BCMDashboardsPaginationConfiguration,
  ListScheduledReportsCommandInput,
  ListScheduledReportsCommandOutput
>(BCMDashboardsClient, ListScheduledReportsCommand, "nextToken", "nextToken", "maxResults");
