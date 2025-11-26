// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppVersionResourcesCommand,
  ListAppVersionResourcesCommandInput,
  ListAppVersionResourcesCommandOutput,
} from "../commands/ListAppVersionResourcesCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppVersionResources: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppVersionResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListAppVersionResourcesCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppVersionResourcesCommandInput,
  ListAppVersionResourcesCommandOutput
>(ResiliencehubClient, ListAppVersionResourcesCommand, "nextToken", "nextToken", "maxResults");
