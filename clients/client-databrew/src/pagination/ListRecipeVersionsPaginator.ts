// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecipeVersionsCommand,
  ListRecipeVersionsCommandInput,
  ListRecipeVersionsCommandOutput,
} from "../commands/ListRecipeVersionsCommand";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecipeVersions: (
  config: DataBrewPaginationConfiguration,
  input: ListRecipeVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListRecipeVersionsCommandOutput> = createPaginator<
  DataBrewPaginationConfiguration,
  ListRecipeVersionsCommandInput,
  ListRecipeVersionsCommandOutput
>(DataBrewClient, ListRecipeVersionsCommand, "NextToken", "NextToken", "MaxResults");
