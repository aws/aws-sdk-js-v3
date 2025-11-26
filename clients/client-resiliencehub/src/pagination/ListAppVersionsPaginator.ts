// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppVersionsCommand,
  ListAppVersionsCommandInput,
  ListAppVersionsCommandOutput,
} from "../commands/ListAppVersionsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppVersions: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAppVersionsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppVersionsCommandInput,
  ListAppVersionsCommandOutput
>(ResiliencehubClient, ListAppVersionsCommand, "nextToken", "nextToken", "maxResults");
