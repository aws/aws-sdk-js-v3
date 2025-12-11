// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchQuickResponsesCommand,
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput,
} from "../commands/SearchQuickResponsesCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchQuickResponses: (
  config: WisdomPaginationConfiguration,
  input: SearchQuickResponsesCommandInput,
  ...rest: any[]
) => Paginator<SearchQuickResponsesCommandOutput> = createPaginator<
  WisdomPaginationConfiguration,
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput
>(WisdomClient, SearchQuickResponsesCommand, "nextToken", "nextToken", "maxResults");
