// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppMeshClient } from "../AppMeshClient";
import { ListRoutesCommand, ListRoutesCommandInput, ListRoutesCommandOutput } from "../commands/ListRoutesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoutes: (
  config: AppMeshPaginationConfiguration,
  input: ListRoutesCommandInput,
  ...rest: any[]
) => Paginator<ListRoutesCommandOutput> = createPaginator<
  AppMeshPaginationConfiguration,
  ListRoutesCommandInput,
  ListRoutesCommandOutput
>(AppMeshClient, ListRoutesCommand, "nextToken", "nextToken", "limit");
