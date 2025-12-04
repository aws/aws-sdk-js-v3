// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFiltersCommand, ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFilters: (
  config: PersonalizePaginationConfiguration,
  input: ListFiltersCommandInput,
  ...rest: any[]
) => Paginator<ListFiltersCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListFiltersCommandInput,
  ListFiltersCommandOutput
>(PersonalizeClient, ListFiltersCommand, "nextToken", "nextToken", "maxResults");
