// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchContentCommand,
  SearchContentCommandInput,
  SearchContentCommandOutput,
} from "../commands/SearchContentCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchContent: (
  config: WisdomPaginationConfiguration,
  input: SearchContentCommandInput,
  ...rest: any[]
) => Paginator<SearchContentCommandOutput> = createPaginator<
  WisdomPaginationConfiguration,
  SearchContentCommandInput,
  SearchContentCommandOutput
>(WisdomClient, SearchContentCommand, "nextToken", "nextToken", "maxResults");
