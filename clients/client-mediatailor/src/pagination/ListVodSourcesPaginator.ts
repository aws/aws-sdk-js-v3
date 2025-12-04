// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVodSourcesCommand,
  ListVodSourcesCommandInput,
  ListVodSourcesCommandOutput,
} from "../commands/ListVodSourcesCommand";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVodSources: (
  config: MediaTailorPaginationConfiguration,
  input: ListVodSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListVodSourcesCommandOutput> = createPaginator<
  MediaTailorPaginationConfiguration,
  ListVodSourcesCommandInput,
  ListVodSourcesCommandOutput
>(MediaTailorClient, ListVodSourcesCommand, "NextToken", "NextToken", "MaxResults");
