// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchNetworkProfilesCommand,
  SearchNetworkProfilesCommandInput,
  SearchNetworkProfilesCommandOutput,
} from "../commands/SearchNetworkProfilesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchNetworkProfiles: (
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchNetworkProfilesCommandInput,
  ...rest: any[]
) => Paginator<SearchNetworkProfilesCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  SearchNetworkProfilesCommandInput,
  SearchNetworkProfilesCommandOutput
>(AlexaForBusinessClient, SearchNetworkProfilesCommand, "NextToken", "NextToken", "MaxResults");
