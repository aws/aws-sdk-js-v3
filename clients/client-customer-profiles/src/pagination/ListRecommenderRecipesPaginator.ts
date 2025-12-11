// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommenderRecipesCommand,
  ListRecommenderRecipesCommandInput,
  ListRecommenderRecipesCommandOutput,
} from "../commands/ListRecommenderRecipesCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommenderRecipes: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListRecommenderRecipesCommandInput,
  ...rest: any[]
) => Paginator<ListRecommenderRecipesCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListRecommenderRecipesCommandInput,
  ListRecommenderRecipesCommandOutput
>(CustomerProfilesClient, ListRecommenderRecipesCommand, "NextToken", "NextToken", "MaxResults");
