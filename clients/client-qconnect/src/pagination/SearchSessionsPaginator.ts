// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchSessionsCommand,
  SearchSessionsCommandInput,
  SearchSessionsCommandOutput,
} from "../commands/SearchSessionsCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchSessions: (
  config: QConnectPaginationConfiguration,
  input: SearchSessionsCommandInput,
  ...rest: any[]
) => Paginator<SearchSessionsCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  SearchSessionsCommandInput,
  SearchSessionsCommandOutput
>(QConnectClient, SearchSessionsCommand, "nextToken", "nextToken", "maxResults");
