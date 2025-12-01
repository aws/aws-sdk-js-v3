// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceNetworkVpcAssociationsCommand,
  ListServiceNetworkVpcAssociationsCommandInput,
  ListServiceNetworkVpcAssociationsCommandOutput,
} from "../commands/ListServiceNetworkVpcAssociationsCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceNetworkVpcAssociations: (
  config: VPCLatticePaginationConfiguration,
  input: ListServiceNetworkVpcAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceNetworkVpcAssociationsCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListServiceNetworkVpcAssociationsCommandInput,
  ListServiceNetworkVpcAssociationsCommandOutput
>(VPCLatticeClient, ListServiceNetworkVpcAssociationsCommand, "nextToken", "nextToken", "maxResults");
