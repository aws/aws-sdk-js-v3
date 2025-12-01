// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInternetEventsCommand,
  ListInternetEventsCommandInput,
  ListInternetEventsCommandOutput,
} from "../commands/ListInternetEventsCommand";
import { InternetMonitorClient } from "../InternetMonitorClient";
import { InternetMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInternetEvents: (
  config: InternetMonitorPaginationConfiguration,
  input: ListInternetEventsCommandInput,
  ...rest: any[]
) => Paginator<ListInternetEventsCommandOutput> = createPaginator<
  InternetMonitorPaginationConfiguration,
  ListInternetEventsCommandInput,
  ListInternetEventsCommandOutput
>(InternetMonitorClient, ListInternetEventsCommand, "NextToken", "NextToken", "MaxResults");
