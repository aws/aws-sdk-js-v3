// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAIGuardrailsCommand,
  ListAIGuardrailsCommandInput,
  ListAIGuardrailsCommandOutput,
} from "../commands/ListAIGuardrailsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAIGuardrails: (
  config: QConnectPaginationConfiguration,
  input: ListAIGuardrailsCommandInput,
  ...rest: any[]
) => Paginator<ListAIGuardrailsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListAIGuardrailsCommandInput,
  ListAIGuardrailsCommandOutput
>(QConnectClient, ListAIGuardrailsCommand, "nextToken", "nextToken", "maxResults");
