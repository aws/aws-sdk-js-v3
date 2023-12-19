// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
} from "../commands/ListNetworksCommand";
import { PrivateNetworksClient } from "../PrivateNetworksClient";
import { PrivateNetworksPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworks: (
  config: PrivateNetworksPaginationConfiguration,
  input: ListNetworksCommandInput,
  ...rest: any[]
) => Paginator<ListNetworksCommandOutput> = createPaginator<
  PrivateNetworksPaginationConfiguration,
  ListNetworksCommandInput,
  ListNetworksCommandOutput
>(PrivateNetworksClient, ListNetworksCommand, "startToken", "nextToken", "maxResults");
