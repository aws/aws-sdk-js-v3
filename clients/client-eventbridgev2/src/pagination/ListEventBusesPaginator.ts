// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventBusesCommand,
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput,
} from "../commands/ListEventBusesCommand";
import { EventBridgeV2Client } from "../EventBridgeV2Client";
import type { EventBridgeV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventBuses: (
  config: EventBridgeV2PaginationConfiguration,
  input: ListEventBusesCommandInput,
  ...rest: any[]
) => Paginator<ListEventBusesCommandOutput> = createPaginator<
  EventBridgeV2PaginationConfiguration,
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput
>(EventBridgeV2Client, ListEventBusesCommand, "NextToken", "NextToken", "MaxResults");
