// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationStatesCommand,
  ListApplicationStatesCommandInput,
  ListApplicationStatesCommandOutput,
} from "../commands/ListApplicationStatesCommand";
import { MigrationHubClient } from "../MigrationHubClient";
import { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationStates: (
  config: MigrationHubPaginationConfiguration,
  input: ListApplicationStatesCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationStatesCommandOutput> = createPaginator<
  MigrationHubPaginationConfiguration,
  ListApplicationStatesCommandInput,
  ListApplicationStatesCommandOutput
>(MigrationHubClient, ListApplicationStatesCommand, "NextToken", "NextToken", "MaxResults");
