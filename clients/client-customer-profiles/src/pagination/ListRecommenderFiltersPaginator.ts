// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommenderFiltersCommand,
  ListRecommenderFiltersCommandInput,
  ListRecommenderFiltersCommandOutput,
} from "../commands/ListRecommenderFiltersCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommenderFilters: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListRecommenderFiltersCommandInput,
  ...rest: any[]
) => Paginator<ListRecommenderFiltersCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListRecommenderFiltersCommandInput,
  ListRecommenderFiltersCommandOutput
>(CustomerProfilesClient, ListRecommenderFiltersCommand, "NextToken", "NextToken", "MaxResults");
