// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentAccountConnectionsCommand,
  ListEnvironmentAccountConnectionsCommandInput,
  ListEnvironmentAccountConnectionsCommandOutput,
} from "../commands/ListEnvironmentAccountConnectionsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentAccountConnections: (
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentAccountConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentAccountConnectionsCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListEnvironmentAccountConnectionsCommandInput,
  ListEnvironmentAccountConnectionsCommandOutput
>(ProtonClient, ListEnvironmentAccountConnectionsCommand, "nextToken", "nextToken", "maxResults");
