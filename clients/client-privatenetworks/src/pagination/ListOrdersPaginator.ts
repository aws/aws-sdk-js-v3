// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListOrdersCommand, ListOrdersCommandInput, ListOrdersCommandOutput } from "../commands/ListOrdersCommand";
import { PrivateNetworksClient } from "../PrivateNetworksClient";
import { PrivateNetworksPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrders: (
  config: PrivateNetworksPaginationConfiguration,
  input: ListOrdersCommandInput,
  ...rest: any[]
) => Paginator<ListOrdersCommandOutput> = createPaginator<
  PrivateNetworksPaginationConfiguration,
  ListOrdersCommandInput,
  ListOrdersCommandOutput
>(PrivateNetworksClient, ListOrdersCommand, "startToken", "nextToken", "maxResults");
