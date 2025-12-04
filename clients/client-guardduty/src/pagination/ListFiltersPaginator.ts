// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFiltersCommand, ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFilters: (
  config: GuardDutyPaginationConfiguration,
  input: ListFiltersCommandInput,
  ...rest: any[]
) => Paginator<ListFiltersCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListFiltersCommandInput,
  ListFiltersCommandOutput
>(GuardDutyClient, ListFiltersCommand, "NextToken", "NextToken", "MaxResults");
