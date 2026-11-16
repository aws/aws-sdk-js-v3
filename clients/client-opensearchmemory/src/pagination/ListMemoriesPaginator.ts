// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMemoriesCommand,
  ListMemoriesCommandInput,
  ListMemoriesCommandOutput,
} from "../commands/ListMemoriesCommand";
import { OpenSearchMemoryClient } from "../OpenSearchMemoryClient";
import type { OpenSearchMemoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMemories: (
  config: OpenSearchMemoryPaginationConfiguration,
  input: ListMemoriesCommandInput,
  ...rest: any[]
) => Paginator<ListMemoriesCommandOutput> = createPaginator<
  OpenSearchMemoryPaginationConfiguration,
  ListMemoriesCommandInput,
  ListMemoriesCommandOutput
>(OpenSearchMemoryClient, ListMemoriesCommand, "nextToken", "nextToken", "maxResults");
