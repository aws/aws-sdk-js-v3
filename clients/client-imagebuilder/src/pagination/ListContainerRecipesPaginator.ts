// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContainerRecipesCommand,
  ListContainerRecipesCommandInput,
  ListContainerRecipesCommandOutput,
} from "../commands/ListContainerRecipesCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContainerRecipes: (
  config: ImagebuilderPaginationConfiguration,
  input: ListContainerRecipesCommandInput,
  ...rest: any[]
) => Paginator<ListContainerRecipesCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListContainerRecipesCommandInput,
  ListContainerRecipesCommandOutput
>(ImagebuilderClient, ListContainerRecipesCommand, "nextToken", "nextToken", "maxResults");
