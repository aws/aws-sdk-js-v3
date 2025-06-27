// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAIAgentVersionsCommand,
  ListAIAgentVersionsCommandInput,
  ListAIAgentVersionsCommandOutput,
} from "../commands/ListAIAgentVersionsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAIAgentVersions: (
  config: QConnectPaginationConfiguration,
  input: ListAIAgentVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAIAgentVersionsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListAIAgentVersionsCommandInput,
  ListAIAgentVersionsCommandOutput
>(QConnectClient, ListAIAgentVersionsCommand, "nextToken", "nextToken", "maxResults");
