// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceNetworkVpcEndpointAssociationsCommand,
  ListServiceNetworkVpcEndpointAssociationsCommandInput,
  ListServiceNetworkVpcEndpointAssociationsCommandOutput,
} from "../commands/ListServiceNetworkVpcEndpointAssociationsCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceNetworkVpcEndpointAssociations: (
  config: VPCLatticePaginationConfiguration,
  input: ListServiceNetworkVpcEndpointAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceNetworkVpcEndpointAssociationsCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListServiceNetworkVpcEndpointAssociationsCommandInput,
  ListServiceNetworkVpcEndpointAssociationsCommandOutput
>(VPCLatticeClient, ListServiceNetworkVpcEndpointAssociationsCommand, "nextToken", "nextToken", "maxResults");
