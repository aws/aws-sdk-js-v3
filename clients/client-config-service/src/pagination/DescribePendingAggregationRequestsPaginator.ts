// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePendingAggregationRequestsCommand,
  DescribePendingAggregationRequestsCommandInput,
  DescribePendingAggregationRequestsCommandOutput,
} from "../commands/DescribePendingAggregationRequestsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePendingAggregationRequests: (
  config: ConfigServicePaginationConfiguration,
  input: DescribePendingAggregationRequestsCommandInput,
  ...rest: any[]
) => Paginator<DescribePendingAggregationRequestsCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribePendingAggregationRequestsCommandInput,
  DescribePendingAggregationRequestsCommandOutput
>(ConfigServiceClient, DescribePendingAggregationRequestsCommand, "NextToken", "NextToken", "Limit");
