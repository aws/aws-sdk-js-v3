// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPrivateConnectionsCommand,
  ListPrivateConnectionsCommandInput,
  ListPrivateConnectionsCommandOutput,
} from "../commands/ListPrivateConnectionsCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrivateConnections: (
  config: SecurityAgentPaginationConfiguration,
  input: ListPrivateConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListPrivateConnectionsCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListPrivateConnectionsCommandInput,
  ListPrivateConnectionsCommandOutput
>(SecurityAgentClient, ListPrivateConnectionsCommand, "nextToken", "nextToken", "maxResults");
