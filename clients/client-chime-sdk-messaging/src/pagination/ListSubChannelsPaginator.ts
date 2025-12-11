// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListSubChannelsCommand,
  ListSubChannelsCommandInput,
  ListSubChannelsCommandOutput,
} from "../commands/ListSubChannelsCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubChannels: (
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListSubChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListSubChannelsCommandOutput> = createPaginator<
  ChimeSDKMessagingPaginationConfiguration,
  ListSubChannelsCommandInput,
  ListSubChannelsCommandOutput
>(ChimeSDKMessagingClient, ListSubChannelsCommand, "NextToken", "NextToken", "MaxResults");
