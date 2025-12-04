// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAIPromptVersionsCommand,
  ListAIPromptVersionsCommandInput,
  ListAIPromptVersionsCommandOutput,
} from "../commands/ListAIPromptVersionsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAIPromptVersions: (
  config: QConnectPaginationConfiguration,
  input: ListAIPromptVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAIPromptVersionsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListAIPromptVersionsCommandInput,
  ListAIPromptVersionsCommandOutput
>(QConnectClient, ListAIPromptVersionsCommand, "nextToken", "nextToken", "maxResults");
