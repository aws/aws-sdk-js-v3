// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRecipesCommand, ListRecipesCommandInput, ListRecipesCommandOutput } from "../commands/ListRecipesCommand";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecipes: (
  config: DataBrewPaginationConfiguration,
  input: ListRecipesCommandInput,
  ...rest: any[]
) => Paginator<ListRecipesCommandOutput> = createPaginator<
  DataBrewPaginationConfiguration,
  ListRecipesCommandInput,
  ListRecipesCommandOutput
>(DataBrewClient, ListRecipesCommand, "NextToken", "NextToken", "MaxResults");
