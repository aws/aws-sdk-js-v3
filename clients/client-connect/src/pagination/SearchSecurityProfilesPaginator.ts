// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchSecurityProfilesCommand,
  SearchSecurityProfilesCommandInput,
  SearchSecurityProfilesCommandOutput,
} from "../commands/SearchSecurityProfilesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchSecurityProfiles: (
  config: ConnectPaginationConfiguration,
  input: SearchSecurityProfilesCommandInput,
  ...rest: any[]
) => Paginator<SearchSecurityProfilesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchSecurityProfilesCommandInput,
  SearchSecurityProfilesCommandOutput
>(ConnectClient, SearchSecurityProfilesCommand, "NextToken", "NextToken", "MaxResults");
