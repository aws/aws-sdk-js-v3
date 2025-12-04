// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResolverEndpointIpAddressesCommand,
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput,
} from "../commands/ListResolverEndpointIpAddressesCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolverEndpointIpAddresses: (
  config: Route53ResolverPaginationConfiguration,
  input: ListResolverEndpointIpAddressesCommandInput,
  ...rest: any[]
) => Paginator<ListResolverEndpointIpAddressesCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput
>(Route53ResolverClient, ListResolverEndpointIpAddressesCommand, "NextToken", "NextToken", "MaxResults");
