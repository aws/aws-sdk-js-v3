// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelsModeratedByAppInstanceUserCommand,
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "../commands/ListChannelsModeratedByAppInstanceUserCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelsModeratedByAppInstanceUser: (
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsModeratedByAppInstanceUserCommandOutput> = createPaginator<
  ChimeSDKMessagingPaginationConfiguration,
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput
>(ChimeSDKMessagingClient, ListChannelsModeratedByAppInstanceUserCommand, "NextToken", "NextToken", "MaxResults");
