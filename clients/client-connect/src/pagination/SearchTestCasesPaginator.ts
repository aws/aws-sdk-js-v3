// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchTestCasesCommand,
  SearchTestCasesCommandInput,
  SearchTestCasesCommandOutput,
} from "../commands/SearchTestCasesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchTestCases: (
  config: ConnectPaginationConfiguration,
  input: SearchTestCasesCommandInput,
  ...rest: any[]
) => Paginator<SearchTestCasesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchTestCasesCommandInput,
  SearchTestCasesCommandOutput
>(ConnectClient, SearchTestCasesCommand, "NextToken", "NextToken", "MaxResults");
