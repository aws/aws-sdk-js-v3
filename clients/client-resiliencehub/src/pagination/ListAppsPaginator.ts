// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApps: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppsCommandInput,
  ...rest: any[]
) => Paginator<ListAppsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppsCommandInput,
  ListAppsCommandOutput
>(ResiliencehubClient, ListAppsCommand, "nextToken", "nextToken", "maxResults");
