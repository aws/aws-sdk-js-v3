// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchUserProfilesCommand,
  SearchUserProfilesCommandInput,
  SearchUserProfilesCommandOutput,
} from "../commands/SearchUserProfilesCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchUserProfiles: (
  config: DataZonePaginationConfiguration,
  input: SearchUserProfilesCommandInput,
  ...rest: any[]
) => Paginator<SearchUserProfilesCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  SearchUserProfilesCommandInput,
  SearchUserProfilesCommandOutput
>(DataZoneClient, SearchUserProfilesCommand, "nextToken", "nextToken", "maxResults");
