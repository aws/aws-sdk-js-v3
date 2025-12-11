// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAIGuardrailVersionsCommand,
  ListAIGuardrailVersionsCommandInput,
  ListAIGuardrailVersionsCommandOutput,
} from "../commands/ListAIGuardrailVersionsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAIGuardrailVersions: (
  config: QConnectPaginationConfiguration,
  input: ListAIGuardrailVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAIGuardrailVersionsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListAIGuardrailVersionsCommandInput,
  ListAIGuardrailVersionsCommandOutput
>(QConnectClient, ListAIGuardrailVersionsCommand, "nextToken", "nextToken", "maxResults");
