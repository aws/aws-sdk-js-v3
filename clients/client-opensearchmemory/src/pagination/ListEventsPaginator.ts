// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListEventsCommand, ListEventsCommandInput, ListEventsCommandOutput } from "../commands/ListEventsCommand";
import { OpenSearchMemoryClient } from "../OpenSearchMemoryClient";
import type { OpenSearchMemoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEvents: (
  config: OpenSearchMemoryPaginationConfiguration,
  input: ListEventsCommandInput,
  ...rest: any[]
) => Paginator<ListEventsCommandOutput> = createPaginator<
  OpenSearchMemoryPaginationConfiguration,
  ListEventsCommandInput,
  ListEventsCommandOutput
>(OpenSearchMemoryClient, ListEventsCommand, "nextToken", "nextToken", "maxResults");
