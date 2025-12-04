// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelFlowsCommand,
  ListChannelFlowsCommandInput,
  ListChannelFlowsCommandOutput,
} from "../commands/ListChannelFlowsCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelFlows: (
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelFlowsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelFlowsCommandOutput> = createPaginator<
  ChimeSDKMessagingPaginationConfiguration,
  ListChannelFlowsCommandInput,
  ListChannelFlowsCommandOutput
>(ChimeSDKMessagingClient, ListChannelFlowsCommand, "NextToken", "NextToken", "MaxResults");
