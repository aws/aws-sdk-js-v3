// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListChannelPlacementGroupsCommand,
  ListChannelPlacementGroupsCommandInput,
  ListChannelPlacementGroupsCommandOutput,
} from "../commands/ListChannelPlacementGroupsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelPlacementGroups: (
  config: MediaLivePaginationConfiguration,
  input: ListChannelPlacementGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelPlacementGroupsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListChannelPlacementGroupsCommandInput,
  ListChannelPlacementGroupsCommandOutput
>(MediaLiveClient, ListChannelPlacementGroupsCommand, "NextToken", "NextToken", "MaxResults");
