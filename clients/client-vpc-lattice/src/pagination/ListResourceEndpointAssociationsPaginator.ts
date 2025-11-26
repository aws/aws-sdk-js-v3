// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceEndpointAssociationsCommand,
  ListResourceEndpointAssociationsCommandInput,
  ListResourceEndpointAssociationsCommandOutput,
} from "../commands/ListResourceEndpointAssociationsCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceEndpointAssociations: (
  config: VPCLatticePaginationConfiguration,
  input: ListResourceEndpointAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceEndpointAssociationsCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListResourceEndpointAssociationsCommandInput,
  ListResourceEndpointAssociationsCommandOutput
>(VPCLatticeClient, ListResourceEndpointAssociationsCommand, "nextToken", "nextToken", "maxResults");
