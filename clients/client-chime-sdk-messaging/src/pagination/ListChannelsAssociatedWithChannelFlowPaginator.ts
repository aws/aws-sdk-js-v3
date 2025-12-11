// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelsAssociatedWithChannelFlowCommand,
  ListChannelsAssociatedWithChannelFlowCommandInput,
  ListChannelsAssociatedWithChannelFlowCommandOutput,
} from "../commands/ListChannelsAssociatedWithChannelFlowCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelsAssociatedWithChannelFlow: (
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelsAssociatedWithChannelFlowCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsAssociatedWithChannelFlowCommandOutput> = createPaginator<
  ChimeSDKMessagingPaginationConfiguration,
  ListChannelsAssociatedWithChannelFlowCommandInput,
  ListChannelsAssociatedWithChannelFlowCommandOutput
>(ChimeSDKMessagingClient, ListChannelsAssociatedWithChannelFlowCommand, "NextToken", "NextToken", "MaxResults");
