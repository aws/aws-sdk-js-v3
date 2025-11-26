// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRecipesCommand, ListRecipesCommandInput, ListRecipesCommandOutput } from "../commands/ListRecipesCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecipes: (
  config: PersonalizePaginationConfiguration,
  input: ListRecipesCommandInput,
  ...rest: any[]
) => Paginator<ListRecipesCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListRecipesCommandInput,
  ListRecipesCommandOutput
>(PersonalizeClient, ListRecipesCommand, "nextToken", "nextToken", "maxResults");
