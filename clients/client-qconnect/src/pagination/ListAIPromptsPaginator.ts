// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAIPromptsCommand,
  ListAIPromptsCommandInput,
  ListAIPromptsCommandOutput,
} from "../commands/ListAIPromptsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAIPrompts: (
  config: QConnectPaginationConfiguration,
  input: ListAIPromptsCommandInput,
  ...rest: any[]
) => Paginator<ListAIPromptsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListAIPromptsCommandInput,
  ListAIPromptsCommandOutput
>(QConnectClient, ListAIPromptsCommand, "nextToken", "nextToken", "maxResults");
