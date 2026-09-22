// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAlerts: (
  config: CloudWatchOmniPaginationConfiguration,
  input: ListAlertsCommandInput,
  ...rest: any[]
) => Paginator<ListAlertsCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  ListAlertsCommandInput,
  ListAlertsCommandOutput
>(CloudWatchOmniClient, ListAlertsCommand, "nextToken", "nextToken", "maxResults");
