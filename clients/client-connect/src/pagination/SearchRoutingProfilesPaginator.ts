// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchRoutingProfilesCommand,
  SearchRoutingProfilesCommandInput,
  SearchRoutingProfilesCommandOutput,
} from "../commands/SearchRoutingProfilesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchRoutingProfiles: (
  config: ConnectPaginationConfiguration,
  input: SearchRoutingProfilesCommandInput,
  ...rest: any[]
) => Paginator<SearchRoutingProfilesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchRoutingProfilesCommandInput,
  SearchRoutingProfilesCommandOutput
>(ConnectClient, SearchRoutingProfilesCommand, "NextToken", "NextToken", "MaxResults");
