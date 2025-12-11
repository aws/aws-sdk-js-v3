// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppMeshClient } from "../AppMeshClient";
import {
  ListGatewayRoutesCommand,
  ListGatewayRoutesCommandInput,
  ListGatewayRoutesCommandOutput,
} from "../commands/ListGatewayRoutesCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGatewayRoutes: (
  config: AppMeshPaginationConfiguration,
  input: ListGatewayRoutesCommandInput,
  ...rest: any[]
) => Paginator<ListGatewayRoutesCommandOutput> = createPaginator<
  AppMeshPaginationConfiguration,
  ListGatewayRoutesCommandInput,
  ListGatewayRoutesCommandOutput
>(AppMeshClient, ListGatewayRoutesCommand, "nextToken", "nextToken", "limit");
