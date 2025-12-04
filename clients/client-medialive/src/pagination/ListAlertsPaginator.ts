// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAlerts: (
  config: MediaLivePaginationConfiguration,
  input: ListAlertsCommandInput,
  ...rest: any[]
) => Paginator<ListAlertsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListAlertsCommandInput,
  ListAlertsCommandOutput
>(MediaLiveClient, ListAlertsCommand, "NextToken", "NextToken", "MaxResults");
