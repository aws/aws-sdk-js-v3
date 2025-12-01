// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetUsageStatisticsCommand,
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
} from "../commands/GetUsageStatisticsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetUsageStatistics: (
  config: GuardDutyPaginationConfiguration,
  input: GetUsageStatisticsCommandInput,
  ...rest: any[]
) => Paginator<GetUsageStatisticsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput
>(GuardDutyClient, GetUsageStatisticsCommand, "NextToken", "NextToken", "MaxResults");
