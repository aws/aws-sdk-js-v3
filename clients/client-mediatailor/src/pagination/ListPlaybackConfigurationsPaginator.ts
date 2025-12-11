// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPlaybackConfigurationsCommand,
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "../commands/ListPlaybackConfigurationsCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlaybackConfigurations: (
  config: MediaTailorPaginationConfiguration,
  input: ListPlaybackConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListPlaybackConfigurationsCommandOutput> = createPaginator<
  MediaTailorPaginationConfiguration,
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput
>(MediaTailorClient, ListPlaybackConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
