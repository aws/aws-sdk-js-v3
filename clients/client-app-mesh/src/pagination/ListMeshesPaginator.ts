// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppMeshClient } from "../AppMeshClient";
import { ListMeshesCommand, ListMeshesCommandInput, ListMeshesCommandOutput } from "../commands/ListMeshesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMeshes: (
  config: AppMeshPaginationConfiguration,
  input: ListMeshesCommandInput,
  ...rest: any[]
) => Paginator<ListMeshesCommandOutput> = createPaginator<
  AppMeshPaginationConfiguration,
  ListMeshesCommandInput,
  ListMeshesCommandOutput
>(AppMeshClient, ListMeshesCommand, "nextToken", "nextToken", "limit");
