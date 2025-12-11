// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearch: (
  config: ResourceExplorer2PaginationConfiguration,
  input: SearchCommandInput,
  ...rest: any[]
) => Paginator<SearchCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  SearchCommandInput,
  SearchCommandOutput
>(ResourceExplorer2Client, SearchCommand, "NextToken", "NextToken", "MaxResults");
