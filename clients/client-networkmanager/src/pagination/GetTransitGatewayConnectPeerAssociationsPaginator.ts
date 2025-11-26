// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTransitGatewayConnectPeerAssociationsCommand,
  GetTransitGatewayConnectPeerAssociationsCommandInput,
  GetTransitGatewayConnectPeerAssociationsCommandOutput,
} from "../commands/GetTransitGatewayConnectPeerAssociationsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTransitGatewayConnectPeerAssociations: (
  config: NetworkManagerPaginationConfiguration,
  input: GetTransitGatewayConnectPeerAssociationsCommandInput,
  ...rest: any[]
) => Paginator<GetTransitGatewayConnectPeerAssociationsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetTransitGatewayConnectPeerAssociationsCommandInput,
  GetTransitGatewayConnectPeerAssociationsCommandOutput
>(NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand, "NextToken", "NextToken", "MaxResults");
