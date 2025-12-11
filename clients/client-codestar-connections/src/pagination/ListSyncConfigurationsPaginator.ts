// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient";
import {
  ListSyncConfigurationsCommand,
  ListSyncConfigurationsCommandInput,
  ListSyncConfigurationsCommandOutput,
} from "../commands/ListSyncConfigurationsCommand";
import { CodeStarConnectionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSyncConfigurations: (
  config: CodeStarConnectionsPaginationConfiguration,
  input: ListSyncConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListSyncConfigurationsCommandOutput> = createPaginator<
  CodeStarConnectionsPaginationConfiguration,
  ListSyncConfigurationsCommandInput,
  ListSyncConfigurationsCommandOutput
>(CodeStarConnectionsClient, ListSyncConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
