// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListNetworkSitesCommand,
  ListNetworkSitesCommandInput,
  ListNetworkSitesCommandOutput,
} from "../commands/ListNetworkSitesCommand";
import { PrivateNetworksClient } from "../PrivateNetworksClient";
import { PrivateNetworksPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkSites: (
  config: PrivateNetworksPaginationConfiguration,
  input: ListNetworkSitesCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkSitesCommandOutput> = createPaginator<
  PrivateNetworksPaginationConfiguration,
  ListNetworkSitesCommandInput,
  ListNetworkSitesCommandOutput
>(PrivateNetworksClient, ListNetworkSitesCommand, "startToken", "nextToken", "maxResults");
