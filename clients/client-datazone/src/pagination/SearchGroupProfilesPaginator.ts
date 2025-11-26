// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchGroupProfilesCommand,
  SearchGroupProfilesCommandInput,
  SearchGroupProfilesCommandOutput,
} from "../commands/SearchGroupProfilesCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchGroupProfiles: (
  config: DataZonePaginationConfiguration,
  input: SearchGroupProfilesCommandInput,
  ...rest: any[]
) => Paginator<SearchGroupProfilesCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  SearchGroupProfilesCommandInput,
  SearchGroupProfilesCommandOutput
>(DataZoneClient, SearchGroupProfilesCommand, "nextToken", "nextToken", "maxResults");
