// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppMeshClient } from "../AppMeshClient";
import {
  ListVirtualServicesCommand,
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput,
} from "../commands/ListVirtualServicesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVirtualServices: (
  config: AppMeshPaginationConfiguration,
  input: ListVirtualServicesCommandInput,
  ...rest: any[]
) => Paginator<ListVirtualServicesCommandOutput> = createPaginator<
  AppMeshPaginationConfiguration,
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput
>(AppMeshClient, ListVirtualServicesCommand, "nextToken", "nextToken", "limit");
