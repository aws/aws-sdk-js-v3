// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchTablesCommand,
  SearchTablesCommandInput,
  SearchTablesCommandOutput,
} from "../commands/SearchTablesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchTables: (
  config: GluePaginationConfiguration,
  input: SearchTablesCommandInput,
  ...rest: any[]
) => Paginator<SearchTablesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  SearchTablesCommandInput,
  SearchTablesCommandOutput
>(GlueClient, SearchTablesCommand, "NextToken", "NextToken", "MaxResults");
