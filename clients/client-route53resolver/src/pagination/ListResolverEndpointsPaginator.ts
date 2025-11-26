// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResolverEndpointsCommand,
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput,
} from "../commands/ListResolverEndpointsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolverEndpoints: (
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListResolverEndpointsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput
>(Route53ResolverClient, ListResolverEndpointsCommand, "NextToken", "NextToken", "MaxResults");
