// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppMeshClient } from "../AppMeshClient";
import {
  ListVirtualGatewaysCommand,
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput,
} from "../commands/ListVirtualGatewaysCommand";
import { AppMeshPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVirtualGateways: (
  config: AppMeshPaginationConfiguration,
  input: ListVirtualGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListVirtualGatewaysCommandOutput> = createPaginator<
  AppMeshPaginationConfiguration,
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput
>(AppMeshClient, ListVirtualGatewaysCommand, "nextToken", "nextToken", "limit");
