// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchRulesCommand, SearchRulesCommandInput, SearchRulesCommandOutput } from "../commands/SearchRulesCommand";
import { ConnectClient } from "../ConnectClient";
import type { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchRules: (
  config: ConnectPaginationConfiguration,
  input: SearchRulesCommandInput,
  ...rest: any[]
) => Paginator<SearchRulesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchRulesCommandInput,
  SearchRulesCommandOutput
>(ConnectClient, SearchRulesCommand, "NextToken", "NextToken", "MaxResults");
