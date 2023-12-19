// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import { SearchUsersCommand, SearchUsersCommandInput, SearchUsersCommandOutput } from "../commands/SearchUsersCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchUsers: (
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchUsersCommandInput,
  ...rest: any[]
) => Paginator<SearchUsersCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  SearchUsersCommandInput,
  SearchUsersCommandOutput
>(AlexaForBusinessClient, SearchUsersCommand, "NextToken", "NextToken", "MaxResults");
