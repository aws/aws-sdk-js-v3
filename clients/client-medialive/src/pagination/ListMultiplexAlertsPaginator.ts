// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListMultiplexAlertsCommand,
  ListMultiplexAlertsCommandInput,
  ListMultiplexAlertsCommandOutput,
} from "../commands/ListMultiplexAlertsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMultiplexAlerts: (
  config: MediaLivePaginationConfiguration,
  input: ListMultiplexAlertsCommandInput,
  ...rest: any[]
) => Paginator<ListMultiplexAlertsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListMultiplexAlertsCommandInput,
  ListMultiplexAlertsCommandOutput
>(MediaLiveClient, ListMultiplexAlertsCommand, "NextToken", "NextToken", "MaxResults");
