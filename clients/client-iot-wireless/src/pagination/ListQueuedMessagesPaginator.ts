// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQueuedMessagesCommand,
  ListQueuedMessagesCommandInput,
  ListQueuedMessagesCommandOutput,
} from "../commands/ListQueuedMessagesCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueuedMessages: (
  config: IoTWirelessPaginationConfiguration,
  input: ListQueuedMessagesCommandInput,
  ...rest: any[]
) => Paginator<ListQueuedMessagesCommandOutput> = createPaginator<
  IoTWirelessPaginationConfiguration,
  ListQueuedMessagesCommandInput,
  ListQueuedMessagesCommandOutput
>(IoTWirelessClient, ListQueuedMessagesCommand, "NextToken", "NextToken", "MaxResults");
