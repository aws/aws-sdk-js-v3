// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceNetworksCommand,
  ListServiceNetworksCommandInput,
  ListServiceNetworksCommandOutput,
} from "../commands/ListServiceNetworksCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import type { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceNetworks: (
  config: VPCLatticePaginationConfiguration,
  input: ListServiceNetworksCommandInput,
  ...rest: any[]
) => Paginator<ListServiceNetworksCommandOutput> = createPaginator<
  VPCLatticePaginationConfiguration,
  ListServiceNetworksCommandInput,
  ListServiceNetworksCommandOutput
>(VPCLatticeClient, ListServiceNetworksCommand, "nextToken", "nextToken", "maxResults");
