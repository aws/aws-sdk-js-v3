// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWatchlistsCommand,
  ListWatchlistsCommandInput,
  ListWatchlistsCommandOutput,
} from "../commands/ListWatchlistsCommand";
import { VoiceIDClient } from "../VoiceIDClient";
import { VoiceIDPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWatchlists: (
  config: VoiceIDPaginationConfiguration,
  input: ListWatchlistsCommandInput,
  ...rest: any[]
) => Paginator<ListWatchlistsCommandOutput> = createPaginator<
  VoiceIDPaginationConfiguration,
  ListWatchlistsCommandInput,
  ListWatchlistsCommandOutput
>(VoiceIDClient, ListWatchlistsCommand, "NextToken", "NextToken", "MaxResults");
