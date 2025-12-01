// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeConnectionsClient } from "../CodeConnectionsClient";
import {
  ListSyncConfigurationsCommand,
  ListSyncConfigurationsCommandInput,
  ListSyncConfigurationsCommandOutput,
} from "../commands/ListSyncConfigurationsCommand";
import { CodeConnectionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSyncConfigurations: (
  config: CodeConnectionsPaginationConfiguration,
  input: ListSyncConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListSyncConfigurationsCommandOutput> = createPaginator<
  CodeConnectionsPaginationConfiguration,
  ListSyncConfigurationsCommandInput,
  ListSyncConfigurationsCommandOutput
>(CodeConnectionsClient, ListSyncConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
