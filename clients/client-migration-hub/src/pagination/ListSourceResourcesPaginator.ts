// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSourceResourcesCommand,
  ListSourceResourcesCommandInput,
  ListSourceResourcesCommandOutput,
} from "../commands/ListSourceResourcesCommand";
import { MigrationHubClient } from "../MigrationHubClient";
import type { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSourceResources: (
  config: MigrationHubPaginationConfiguration,
  input: ListSourceResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListSourceResourcesCommandOutput> = createPaginator<
  MigrationHubPaginationConfiguration,
  ListSourceResourcesCommandInput,
  ListSourceResourcesCommandOutput
>(MigrationHubClient, ListSourceResourcesCommand, "NextToken", "NextToken", "MaxResults");
