// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppInputSourcesCommand,
  ListAppInputSourcesCommandInput,
  ListAppInputSourcesCommandOutput,
} from "../commands/ListAppInputSourcesCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppInputSources: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppInputSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListAppInputSourcesCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppInputSourcesCommandInput,
  ListAppInputSourcesCommandOutput
>(ResiliencehubClient, ListAppInputSourcesCommand, "nextToken", "nextToken", "maxResults");
