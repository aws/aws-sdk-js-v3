// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchListingsCommand,
  SearchListingsCommandInput,
  SearchListingsCommandOutput,
} from "../commands/SearchListingsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchListings: (
  config: DataZonePaginationConfiguration,
  input: SearchListingsCommandInput,
  ...rest: any[]
) => Paginator<SearchListingsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  SearchListingsCommandInput,
  SearchListingsCommandOutput
>(DataZoneClient, SearchListingsCommand, "nextToken", "nextToken", "maxResults");
