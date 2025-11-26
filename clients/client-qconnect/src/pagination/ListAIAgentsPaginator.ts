// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAIAgentsCommand,
  ListAIAgentsCommandInput,
  ListAIAgentsCommandOutput,
} from "../commands/ListAIAgentsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAIAgents: (
  config: QConnectPaginationConfiguration,
  input: ListAIAgentsCommandInput,
  ...rest: any[]
) => Paginator<ListAIAgentsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListAIAgentsCommandInput,
  ListAIAgentsCommandOutput
>(QConnectClient, ListAIAgentsCommand, "nextToken", "nextToken", "maxResults");
