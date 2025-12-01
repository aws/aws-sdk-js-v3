// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchTypesCommand, SearchTypesCommandInput, SearchTypesCommandOutput } from "../commands/SearchTypesCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchTypes: (
  config: DataZonePaginationConfiguration,
  input: SearchTypesCommandInput,
  ...rest: any[]
) => Paginator<SearchTypesCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  SearchTypesCommandInput,
  SearchTypesCommandOutput
>(DataZoneClient, SearchTypesCommand, "nextToken", "nextToken", "maxResults");
