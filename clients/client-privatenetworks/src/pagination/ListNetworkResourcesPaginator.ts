// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListNetworkResourcesCommand,
  ListNetworkResourcesCommandInput,
  ListNetworkResourcesCommandOutput,
} from "../commands/ListNetworkResourcesCommand";
import { PrivateNetworksClient } from "../PrivateNetworksClient";
import { PrivateNetworksPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkResources: (
  config: PrivateNetworksPaginationConfiguration,
  input: ListNetworkResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkResourcesCommandOutput> = createPaginator<
  PrivateNetworksPaginationConfiguration,
  ListNetworkResourcesCommandInput,
  ListNetworkResourcesCommandOutput
>(PrivateNetworksClient, ListNetworkResourcesCommand, "startToken", "nextToken", "maxResults");
