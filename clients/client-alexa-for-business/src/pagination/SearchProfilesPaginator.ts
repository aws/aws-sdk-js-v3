// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchProfilesCommand,
  SearchProfilesCommandInput,
  SearchProfilesCommandOutput,
} from "../commands/SearchProfilesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchProfiles: (
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchProfilesCommandInput,
  ...rest: any[]
) => Paginator<SearchProfilesCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  SearchProfilesCommandInput,
  SearchProfilesCommandOutput
>(AlexaForBusinessClient, SearchProfilesCommand, "NextToken", "NextToken", "MaxResults");
