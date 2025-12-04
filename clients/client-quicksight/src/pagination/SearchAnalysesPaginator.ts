// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchAnalysesCommand,
  SearchAnalysesCommandInput,
  SearchAnalysesCommandOutput,
} from "../commands/SearchAnalysesCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchAnalyses: (
  config: QuickSightPaginationConfiguration,
  input: SearchAnalysesCommandInput,
  ...rest: any[]
) => Paginator<SearchAnalysesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchAnalysesCommandInput,
  SearchAnalysesCommandOutput
>(QuickSightClient, SearchAnalysesCommand, "NextToken", "NextToken", "MaxResults");
