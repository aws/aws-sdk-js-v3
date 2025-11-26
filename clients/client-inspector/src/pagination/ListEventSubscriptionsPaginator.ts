// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventSubscriptionsCommand,
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput,
} from "../commands/ListEventSubscriptionsCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventSubscriptions: (
  config: InspectorPaginationConfiguration,
  input: ListEventSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListEventSubscriptionsCommandOutput> = createPaginator<
  InspectorPaginationConfiguration,
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput
>(InspectorClient, ListEventSubscriptionsCommand, "nextToken", "nextToken", "maxResults");
