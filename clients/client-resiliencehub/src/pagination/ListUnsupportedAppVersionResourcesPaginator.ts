// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUnsupportedAppVersionResourcesCommand,
  ListUnsupportedAppVersionResourcesCommandInput,
  ListUnsupportedAppVersionResourcesCommandOutput,
} from "../commands/ListUnsupportedAppVersionResourcesCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUnsupportedAppVersionResources: (
  config: ResiliencehubPaginationConfiguration,
  input: ListUnsupportedAppVersionResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListUnsupportedAppVersionResourcesCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListUnsupportedAppVersionResourcesCommandInput,
  ListUnsupportedAppVersionResourcesCommandOutput
>(ResiliencehubClient, ListUnsupportedAppVersionResourcesCommand, "nextToken", "nextToken", "maxResults");
