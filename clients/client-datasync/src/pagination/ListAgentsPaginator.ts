// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAgentsCommand, ListAgentsCommandInput, ListAgentsCommandOutput } from "../commands/ListAgentsCommand";
import { DataSyncClient } from "../DataSyncClient";
import { DataSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgents: (
  config: DataSyncPaginationConfiguration,
  input: ListAgentsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentsCommandOutput> = createPaginator<
  DataSyncPaginationConfiguration,
  ListAgentsCommandInput,
  ListAgentsCommandOutput
>(DataSyncClient, ListAgentsCommand, "NextToken", "NextToken", "MaxResults");
