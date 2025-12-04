// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFiltersCommand, ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFilters: (
  config: Inspector2PaginationConfiguration,
  input: ListFiltersCommandInput,
  ...rest: any[]
) => Paginator<ListFiltersCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListFiltersCommandInput,
  ListFiltersCommandOutput
>(Inspector2Client, ListFiltersCommand, "nextToken", "nextToken", "maxResults");
