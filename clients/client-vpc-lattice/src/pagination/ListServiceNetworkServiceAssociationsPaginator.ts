// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceNetworkServiceAssociationsCommand,
  ListServiceNetworkServiceAssociationsCommandInput,
  ListServiceNetworkServiceAssociationsCommandOutput,
} from "../commands/ListServiceNetworkServiceAssociationsCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceNetworkServiceAssociations: (
  config: VPCLatticePaginationConfiguration,
  input: ListServiceNetworkServiceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceNetworkServiceAssociationsCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListServiceNetworkServiceAssociationsCommandInput,
  ListServiceNetworkServiceAssociationsCommandOutput
>(VPCLatticeClient, ListServiceNetworkServiceAssociationsCommand, "nextToken", "nextToken", "maxResults");
