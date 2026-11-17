// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCoreNetworkEndpointsCommand,
  ListCoreNetworkEndpointsCommandInput,
  ListCoreNetworkEndpointsCommandOutput,
} from "../commands/ListCoreNetworkEndpointsCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import type { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCoreNetworkEndpoints: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListCoreNetworkEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListCoreNetworkEndpointsCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListCoreNetworkEndpointsCommandInput,
  ListCoreNetworkEndpointsCommandOutput
>(Route53GlobalResolverClient, ListCoreNetworkEndpointsCommand, "nextToken", "nextToken", "maxResults");
