// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectPeersCommand,
  ListConnectPeersCommandInput,
  ListConnectPeersCommandOutput,
} from "../commands/ListConnectPeersCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectPeers: (
  config: NetworkManagerPaginationConfiguration,
  input: ListConnectPeersCommandInput,
  ...rest: any[]
) => Paginator<ListConnectPeersCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListConnectPeersCommandInput,
  ListConnectPeersCommandOutput
>(NetworkManagerClient, ListConnectPeersCommand, "NextToken", "NextToken", "MaxResults");
