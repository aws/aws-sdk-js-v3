// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetFiltersCommand,
  ListAssetFiltersCommandInput,
  ListAssetFiltersCommandOutput,
} from "../commands/ListAssetFiltersCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetFilters: (
  config: DataZonePaginationConfiguration,
  input: ListAssetFiltersCommandInput,
  ...rest: any[]
) => Paginator<ListAssetFiltersCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListAssetFiltersCommandInput,
  ListAssetFiltersCommandOutput
>(DataZoneClient, ListAssetFiltersCommand, "nextToken", "nextToken", "maxResults");
