// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelModeratorsCommand,
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "../commands/ListChannelModeratorsCommand";
import type { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelModerators: (
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelModeratorsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelModeratorsCommandOutput> = createPaginator<
  ChimeSDKMessagingPaginationConfiguration,
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput
>(ChimeSDKMessagingClient, ListChannelModeratorsCommand, "NextToken", "NextToken", "MaxResults");
