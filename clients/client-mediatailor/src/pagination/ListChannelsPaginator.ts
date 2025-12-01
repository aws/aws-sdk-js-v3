// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "../commands/ListChannelsCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannels: (
  config: MediaTailorPaginationConfiguration,
  input: ListChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsCommandOutput> = createPaginator<
  MediaTailorPaginationConfiguration,
  ListChannelsCommandInput,
  ListChannelsCommandOutput
>(MediaTailorClient, ListChannelsCommand, "NextToken", "NextToken", "MaxResults");
