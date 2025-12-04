// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchSessionsCommand,
  SearchSessionsCommandInput,
  SearchSessionsCommandOutput,
} from "../commands/SearchSessionsCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchSessions: (
  config: WisdomPaginationConfiguration,
  input: SearchSessionsCommandInput,
  ...rest: any[]
) => Paginator<SearchSessionsCommandOutput> = createPaginator<
  WisdomPaginationConfiguration,
  SearchSessionsCommandInput,
  SearchSessionsCommandOutput
>(WisdomClient, SearchSessionsCommand, "nextToken", "nextToken", "maxResults");
