// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAlerts: (
  config: MediaTailorPaginationConfiguration,
  input: ListAlertsCommandInput,
  ...rest: any[]
) => Paginator<ListAlertsCommandOutput> = createPaginator<
  MediaTailorPaginationConfiguration,
  ListAlertsCommandInput,
  ListAlertsCommandOutput
>(MediaTailorClient, ListAlertsCommand, "NextToken", "NextToken", "MaxResults");
