// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchEventsCommand,
  SearchEventsCommandInput,
  SearchEventsCommandOutput,
} from "../commands/SearchEventsCommand";
import { OpenSearchMemoryClient } from "../OpenSearchMemoryClient";
import type { OpenSearchMemoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchEvents: (
  config: OpenSearchMemoryPaginationConfiguration,
  input: SearchEventsCommandInput,
  ...rest: any[]
) => Paginator<SearchEventsCommandOutput> = createPaginator<
  OpenSearchMemoryPaginationConfiguration,
  SearchEventsCommandInput,
  SearchEventsCommandOutput
>(OpenSearchMemoryClient, SearchEventsCommand, "nextToken", "nextToken", "maxResults");
