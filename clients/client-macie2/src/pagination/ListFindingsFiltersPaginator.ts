// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFindingsFiltersCommand,
  ListFindingsFiltersCommandInput,
  ListFindingsFiltersCommandOutput,
} from "../commands/ListFindingsFiltersCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFindingsFilters: (
  config: Macie2PaginationConfiguration,
  input: ListFindingsFiltersCommandInput,
  ...rest: any[]
) => Paginator<ListFindingsFiltersCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListFindingsFiltersCommandInput,
  ListFindingsFiltersCommandOutput
>(Macie2Client, ListFindingsFiltersCommand, "nextToken", "nextToken", "maxResults");
