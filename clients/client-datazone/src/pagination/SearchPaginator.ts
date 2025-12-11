// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearch: (
  config: DataZonePaginationConfiguration,
  input: SearchCommandInput,
  ...rest: any[]
) => Paginator<SearchCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  SearchCommandInput,
  SearchCommandOutput
>(DataZoneClient, SearchCommand, "nextToken", "nextToken", "maxResults");
