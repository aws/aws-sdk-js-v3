// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppVersionResourceMappingsCommand,
  ListAppVersionResourceMappingsCommandInput,
  ListAppVersionResourceMappingsCommandOutput,
} from "../commands/ListAppVersionResourceMappingsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppVersionResourceMappings: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppVersionResourceMappingsCommandInput,
  ...rest: any[]
) => Paginator<ListAppVersionResourceMappingsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppVersionResourceMappingsCommandInput,
  ListAppVersionResourceMappingsCommandOutput
>(ResiliencehubClient, ListAppVersionResourceMappingsCommand, "nextToken", "nextToken", "maxResults");
