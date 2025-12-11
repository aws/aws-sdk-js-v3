// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHealthEventsCommand,
  ListHealthEventsCommandInput,
  ListHealthEventsCommandOutput,
} from "../commands/ListHealthEventsCommand";
import { InternetMonitorClient } from "../InternetMonitorClient";
import { InternetMonitorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHealthEvents: (
  config: InternetMonitorPaginationConfiguration,
  input: ListHealthEventsCommandInput,
  ...rest: any[]
) => Paginator<ListHealthEventsCommandOutput> = createPaginator<
  InternetMonitorPaginationConfiguration,
  ListHealthEventsCommandInput,
  ListHealthEventsCommandOutput
>(InternetMonitorClient, ListHealthEventsCommand, "NextToken", "NextToken", "MaxResults");
