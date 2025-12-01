// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAggregateDiscoveredResourceCountsCommand,
  GetAggregateDiscoveredResourceCountsCommandInput,
  GetAggregateDiscoveredResourceCountsCommandOutput,
} from "../commands/GetAggregateDiscoveredResourceCountsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAggregateDiscoveredResourceCounts: (
  config: ConfigServicePaginationConfiguration,
  input: GetAggregateDiscoveredResourceCountsCommandInput,
  ...rest: any[]
) => Paginator<GetAggregateDiscoveredResourceCountsCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetAggregateDiscoveredResourceCountsCommandInput,
  GetAggregateDiscoveredResourceCountsCommandOutput
>(ConfigServiceClient, GetAggregateDiscoveredResourceCountsCommand, "NextToken", "NextToken", "Limit");
