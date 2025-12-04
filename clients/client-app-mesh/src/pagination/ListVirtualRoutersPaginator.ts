// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppMeshClient } from "../AppMeshClient";
import {
  ListVirtualRoutersCommand,
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput,
} from "../commands/ListVirtualRoutersCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVirtualRouters: (
  config: AppMeshPaginationConfiguration,
  input: ListVirtualRoutersCommandInput,
  ...rest: any[]
) => Paginator<ListVirtualRoutersCommandOutput> = createPaginator<
  AppMeshPaginationConfiguration,
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput
>(AppMeshClient, ListVirtualRoutersCommand, "nextToken", "nextToken", "limit");
