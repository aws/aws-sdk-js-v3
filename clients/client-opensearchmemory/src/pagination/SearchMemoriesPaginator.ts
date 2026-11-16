// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchMemoriesCommand,
  SearchMemoriesCommandInput,
  SearchMemoriesCommandOutput,
} from "../commands/SearchMemoriesCommand";
import { OpenSearchMemoryClient } from "../OpenSearchMemoryClient";
import type { OpenSearchMemoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchMemories: (
  config: OpenSearchMemoryPaginationConfiguration,
  input: SearchMemoriesCommandInput,
  ...rest: any[]
) => Paginator<SearchMemoriesCommandOutput> = createPaginator<
  OpenSearchMemoryPaginationConfiguration,
  SearchMemoriesCommandInput,
  SearchMemoriesCommandOutput
>(OpenSearchMemoryClient, SearchMemoriesCommand, "nextToken", "nextToken", "maxResults");
