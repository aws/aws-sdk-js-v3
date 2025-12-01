// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchQuickResponsesCommand,
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput,
} from "../commands/SearchQuickResponsesCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchQuickResponses: (
  config: QConnectPaginationConfiguration,
  input: SearchQuickResponsesCommandInput,
  ...rest: any[]
) => Paginator<SearchQuickResponsesCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput
>(QConnectClient, SearchQuickResponsesCommand, "nextToken", "nextToken", "maxResults");
