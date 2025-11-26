// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchFlowsCommand, SearchFlowsCommandInput, SearchFlowsCommandOutput } from "../commands/SearchFlowsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchFlows: (
  config: QuickSightPaginationConfiguration,
  input: SearchFlowsCommandInput,
  ...rest: any[]
) => Paginator<SearchFlowsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchFlowsCommandInput,
  SearchFlowsCommandOutput
>(QuickSightClient, SearchFlowsCommand, "NextToken", "NextToken", "MaxResults");
