// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImageRecipesCommand,
  ListImageRecipesCommandInput,
  ListImageRecipesCommandOutput,
} from "../commands/ListImageRecipesCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImageRecipes: (
  config: ImagebuilderPaginationConfiguration,
  input: ListImageRecipesCommandInput,
  ...rest: any[]
) => Paginator<ListImageRecipesCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListImageRecipesCommandInput,
  ListImageRecipesCommandOutput
>(ImagebuilderClient, ListImageRecipesCommand, "nextToken", "nextToken", "maxResults");
