// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPipesCommand, ListPipesCommandInput, ListPipesCommandOutput } from "../commands/ListPipesCommand";
import { PipesClient } from "../PipesClient";
import { PipesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipes: (
  config: PipesPaginationConfiguration,
  input: ListPipesCommandInput,
  ...rest: any[]
) => Paginator<ListPipesCommandOutput> = createPaginator<
  PipesPaginationConfiguration,
  ListPipesCommandInput,
  ListPipesCommandOutput
>(PipesClient, ListPipesCommand, "NextToken", "NextToken", "Limit");
