// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  SearchChannelsCommand,
  SearchChannelsCommandInput,
  SearchChannelsCommandOutput,
} from "../commands/SearchChannelsCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchChannels: (
  config: ChimeSDKMessagingPaginationConfiguration,
  input: SearchChannelsCommandInput,
  ...rest: any[]
) => Paginator<SearchChannelsCommandOutput> = createPaginator<
  ChimeSDKMessagingPaginationConfiguration,
  SearchChannelsCommandInput,
  SearchChannelsCommandOutput
>(ChimeSDKMessagingClient, SearchChannelsCommand, "NextToken", "NextToken", "MaxResults");
