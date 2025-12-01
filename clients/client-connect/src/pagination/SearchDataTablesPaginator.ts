// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  SearchDataTablesCommand,
  SearchDataTablesCommandInput,
  SearchDataTablesCommandOutput,
} from "../commands/SearchDataTablesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchDataTables: (
  config: ConnectPaginationConfiguration,
  input: SearchDataTablesCommandInput,
  ...rest: any[]
) => Paginator<SearchDataTablesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchDataTablesCommandInput,
  SearchDataTablesCommandOutput
>(ConnectClient, SearchDataTablesCommand, "NextToken", "NextToken", "MaxResults");
