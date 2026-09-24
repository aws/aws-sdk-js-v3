// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscribersCommand,
  ListSubscribersCommandInput,
  ListSubscribersCommandOutput,
} from "../commands/ListSubscribersCommand";
import { EventBridgeV2Client } from "../EventBridgeV2Client";
import type { EventBridgeV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscribers: (
  config: EventBridgeV2PaginationConfiguration,
  input: ListSubscribersCommandInput,
  ...rest: any[]
) => Paginator<ListSubscribersCommandOutput> = createPaginator<
  EventBridgeV2PaginationConfiguration,
  ListSubscribersCommandInput,
  ListSubscribersCommandOutput
>(EventBridgeV2Client, ListSubscribersCommand, "NextToken", "NextToken", "MaxResults");
