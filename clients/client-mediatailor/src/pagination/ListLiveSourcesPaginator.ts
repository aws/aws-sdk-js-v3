// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLiveSourcesCommand,
  ListLiveSourcesCommandInput,
  ListLiveSourcesCommandOutput,
} from "../commands/ListLiveSourcesCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLiveSources: (
  config: MediaTailorPaginationConfiguration,
  input: ListLiveSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListLiveSourcesCommandOutput> = createPaginator<
  MediaTailorPaginationConfiguration,
  ListLiveSourcesCommandInput,
  ListLiveSourcesCommandOutput
>(MediaTailorClient, ListLiveSourcesCommand, "NextToken", "NextToken", "MaxResults");
