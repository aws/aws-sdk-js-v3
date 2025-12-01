// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelMessagesCommand,
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "../commands/ListChannelMessagesCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelMessages: (
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelMessagesCommandInput,
  ...rest: any[]
) => Paginator<ListChannelMessagesCommandOutput> = createPaginator<
  ChimeSDKMessagingPaginationConfiguration,
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput
>(ChimeSDKMessagingClient, ListChannelMessagesCommand, "NextToken", "NextToken", "MaxResults");
