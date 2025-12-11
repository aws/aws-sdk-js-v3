// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSessionsStatisticsAggregationCommand,
  GetSessionsStatisticsAggregationCommandInput,
  GetSessionsStatisticsAggregationCommandOutput,
} from "../commands/GetSessionsStatisticsAggregationCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSessionsStatisticsAggregation: (
  config: DeadlinePaginationConfiguration,
  input: GetSessionsStatisticsAggregationCommandInput,
  ...rest: any[]
) => Paginator<GetSessionsStatisticsAggregationCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  GetSessionsStatisticsAggregationCommandInput,
  GetSessionsStatisticsAggregationCommandOutput
>(DeadlineClient, GetSessionsStatisticsAggregationCommand, "nextToken", "nextToken", "maxResults");
