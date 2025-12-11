// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAnalysesCommand,
  ListAnalysesCommandInput,
  ListAnalysesCommandOutput,
} from "../commands/ListAnalysesCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnalyses: (
  config: QuickSightPaginationConfiguration,
  input: ListAnalysesCommandInput,
  ...rest: any[]
) => Paginator<ListAnalysesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListAnalysesCommandInput,
  ListAnalysesCommandOutput
>(QuickSightClient, ListAnalysesCommand, "NextToken", "NextToken", "MaxResults");
