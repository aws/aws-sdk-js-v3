// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAggregateDiscoveredResourcesCommand,
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput,
} from "../commands/ListAggregateDiscoveredResourcesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAggregateDiscoveredResources: (
  config: ConfigServicePaginationConfiguration,
  input: ListAggregateDiscoveredResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListAggregateDiscoveredResourcesCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput
>(ConfigServiceClient, ListAggregateDiscoveredResourcesCommand, "NextToken", "NextToken", "Limit");
