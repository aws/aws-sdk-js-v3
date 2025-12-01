// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAnomaliesForInsightCommand,
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
} from "../commands/ListAnomaliesForInsightCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnomaliesForInsight: (
  config: DevOpsGuruPaginationConfiguration,
  input: ListAnomaliesForInsightCommandInput,
  ...rest: any[]
) => Paginator<ListAnomaliesForInsightCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput
>(DevOpsGuruClient, ListAnomaliesForInsightCommand, "NextToken", "NextToken", "MaxResults");
