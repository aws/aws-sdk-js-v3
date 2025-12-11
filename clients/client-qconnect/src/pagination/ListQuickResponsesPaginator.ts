// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQuickResponsesCommand,
  ListQuickResponsesCommandInput,
  ListQuickResponsesCommandOutput,
} from "../commands/ListQuickResponsesCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQuickResponses: (
  config: QConnectPaginationConfiguration,
  input: ListQuickResponsesCommandInput,
  ...rest: any[]
) => Paginator<ListQuickResponsesCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  ListQuickResponsesCommandInput,
  ListQuickResponsesCommandOutput
>(QConnectClient, ListQuickResponsesCommand, "nextToken", "nextToken", "maxResults");
