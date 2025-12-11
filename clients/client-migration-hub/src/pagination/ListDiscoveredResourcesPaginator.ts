// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "../commands/ListDiscoveredResourcesCommand";
import { MigrationHubClient } from "../MigrationHubClient";
import { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDiscoveredResources: (
  config: MigrationHubPaginationConfiguration,
  input: ListDiscoveredResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListDiscoveredResourcesCommandOutput> = createPaginator<
  MigrationHubPaginationConfiguration,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput
>(MigrationHubClient, ListDiscoveredResourcesCommand, "NextToken", "NextToken", "MaxResults");
