// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppMeshClient } from "../AppMeshClient";
import {
  ListVirtualNodesCommand,
  ListVirtualNodesCommandInput,
  ListVirtualNodesCommandOutput,
} from "../commands/ListVirtualNodesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVirtualNodes: (
  config: AppMeshPaginationConfiguration,
  input: ListVirtualNodesCommandInput,
  ...rest: any[]
) => Paginator<ListVirtualNodesCommandOutput> = createPaginator<
  AppMeshPaginationConfiguration,
  ListVirtualNodesCommandInput,
  ListVirtualNodesCommandOutput
>(AppMeshClient, ListVirtualNodesCommand, "nextToken", "nextToken", "limit");
