// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventSourcesCommand,
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput,
} from "../commands/ListEventSourcesCommand";
import { EventBridgeV2Client } from "../EventBridgeV2Client";
import type { EventBridgeV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventSources: (
  config: EventBridgeV2PaginationConfiguration,
  input: ListEventSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListEventSourcesCommandOutput> = createPaginator<
  EventBridgeV2PaginationConfiguration,
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput
>(EventBridgeV2Client, ListEventSourcesCommand, "NextToken", "NextToken", "MaxResults");
