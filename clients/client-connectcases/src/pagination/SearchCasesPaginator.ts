// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchCasesCommand, SearchCasesCommandInput, SearchCasesCommandOutput } from "../commands/SearchCasesCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchCases: (
  config: ConnectCasesPaginationConfiguration,
  input: SearchCasesCommandInput,
  ...rest: any[]
) => Paginator<SearchCasesCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  SearchCasesCommandInput,
  SearchCasesCommandOutput
>(ConnectCasesClient, SearchCasesCommand, "nextToken", "nextToken", "maxResults");
