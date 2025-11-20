// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListCoreNetworkPrefixListAssociationsCommand,
  ListCoreNetworkPrefixListAssociationsCommandInput,
  ListCoreNetworkPrefixListAssociationsCommandOutput,
} from "../commands/ListCoreNetworkPrefixListAssociationsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCoreNetworkPrefixListAssociations: (
  config: NetworkManagerPaginationConfiguration,
  input: ListCoreNetworkPrefixListAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListCoreNetworkPrefixListAssociationsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListCoreNetworkPrefixListAssociationsCommandInput,
  ListCoreNetworkPrefixListAssociationsCommandOutput
>(NetworkManagerClient, ListCoreNetworkPrefixListAssociationsCommand, "NextToken", "NextToken", "MaxResults");
