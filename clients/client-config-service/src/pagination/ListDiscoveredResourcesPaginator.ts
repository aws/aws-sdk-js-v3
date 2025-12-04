// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "../commands/ListDiscoveredResourcesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDiscoveredResources: (
  config: ConfigServicePaginationConfiguration,
  input: ListDiscoveredResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListDiscoveredResourcesCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput
>(ConfigServiceClient, ListDiscoveredResourcesCommand, "nextToken", "nextToken", "limit");
