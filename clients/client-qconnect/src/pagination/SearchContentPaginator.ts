// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchContentCommand,
  SearchContentCommandInput,
  SearchContentCommandOutput,
} from "../commands/SearchContentCommand";
import { QConnectClient } from "../QConnectClient";
import { QConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchContent: (
  config: QConnectPaginationConfiguration,
  input: SearchContentCommandInput,
  ...rest: any[]
) => Paginator<SearchContentCommandOutput> = createPaginator<
  QConnectPaginationConfiguration,
  SearchContentCommandInput,
  SearchContentCommandOutput
>(QConnectClient, SearchContentCommand, "nextToken", "nextToken", "maxResults");
