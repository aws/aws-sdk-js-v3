// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "../commands/ListConnectionsCommand";
import { InterconnectClient } from "../InterconnectClient";
import type { InterconnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnections: (
  config: InterconnectPaginationConfiguration,
  input: ListConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectionsCommandOutput> = createPaginator<
  InterconnectPaginationConfiguration,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput
>(InterconnectClient, ListConnectionsCommand, "nextToken", "nextToken", "maxResults");
