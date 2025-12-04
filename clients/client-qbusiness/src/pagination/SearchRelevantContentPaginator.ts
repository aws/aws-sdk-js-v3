// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchRelevantContentCommand,
  SearchRelevantContentCommandInput,
  SearchRelevantContentCommandOutput,
} from "../commands/SearchRelevantContentCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchRelevantContent: (
  config: QBusinessPaginationConfiguration,
  input: SearchRelevantContentCommandInput,
  ...rest: any[]
) => Paginator<SearchRelevantContentCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  SearchRelevantContentCommandInput,
  SearchRelevantContentCommandOutput
>(QBusinessClient, SearchRelevantContentCommand, "nextToken", "nextToken", "maxResults");
