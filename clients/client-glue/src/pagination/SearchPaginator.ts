// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import { GlueClient } from "../GlueClient";
import type { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearch: (
  config: GluePaginationConfiguration,
  input: SearchCommandInput,
  ...rest: any[]
) => Paginator<SearchCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  SearchCommandInput,
  SearchCommandOutput
>(GlueClient, SearchCommand, "NextToken", "NextToken", "MaxResults");
