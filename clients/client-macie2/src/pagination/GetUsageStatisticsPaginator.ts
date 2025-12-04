// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetUsageStatisticsCommand,
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
} from "../commands/GetUsageStatisticsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetUsageStatistics: (
  config: Macie2PaginationConfiguration,
  input: GetUsageStatisticsCommandInput,
  ...rest: any[]
) => Paginator<GetUsageStatisticsCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput
>(Macie2Client, GetUsageStatisticsCommand, "nextToken", "nextToken", "maxResults");
