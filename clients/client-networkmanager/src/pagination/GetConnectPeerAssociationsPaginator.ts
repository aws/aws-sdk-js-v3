// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetConnectPeerAssociationsCommand,
  GetConnectPeerAssociationsCommandInput,
  GetConnectPeerAssociationsCommandOutput,
} from "../commands/GetConnectPeerAssociationsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetConnectPeerAssociations: (
  config: NetworkManagerPaginationConfiguration,
  input: GetConnectPeerAssociationsCommandInput,
  ...rest: any[]
) => Paginator<GetConnectPeerAssociationsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetConnectPeerAssociationsCommandInput,
  GetConnectPeerAssociationsCommandOutput
>(NetworkManagerClient, GetConnectPeerAssociationsCommand, "NextToken", "NextToken", "MaxResults");
