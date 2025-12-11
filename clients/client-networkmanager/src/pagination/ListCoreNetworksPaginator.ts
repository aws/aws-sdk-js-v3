// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCoreNetworksCommand,
  ListCoreNetworksCommandInput,
  ListCoreNetworksCommandOutput,
} from "../commands/ListCoreNetworksCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCoreNetworks: (
  config: NetworkManagerPaginationConfiguration,
  input: ListCoreNetworksCommandInput,
  ...rest: any[]
) => Paginator<ListCoreNetworksCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListCoreNetworksCommandInput,
  ListCoreNetworksCommandOutput
>(NetworkManagerClient, ListCoreNetworksCommand, "NextToken", "NextToken", "MaxResults");
