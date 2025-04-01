// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListServiceNetworkResourceAssociationsCommand,
  ListServiceNetworkResourceAssociationsCommandInput,
  ListServiceNetworkResourceAssociationsCommandOutput,
} from "../commands/ListServiceNetworkResourceAssociationsCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceNetworkResourceAssociations: (
  config: VPCLatticePaginationConfiguration,
  input: ListServiceNetworkResourceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceNetworkResourceAssociationsCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListServiceNetworkResourceAssociationsCommandInput,
  ListServiceNetworkResourceAssociationsCommandOutput
>(VPCLatticeClient, ListServiceNetworkResourceAssociationsCommand, "nextToken", "nextToken", "maxResults");
