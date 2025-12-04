// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTransitGatewayRegistrationsCommand,
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
} from "../commands/GetTransitGatewayRegistrationsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTransitGatewayRegistrations: (
  config: NetworkManagerPaginationConfiguration,
  input: GetTransitGatewayRegistrationsCommandInput,
  ...rest: any[]
) => Paginator<GetTransitGatewayRegistrationsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput
>(NetworkManagerClient, GetTransitGatewayRegistrationsCommand, "NextToken", "NextToken", "MaxResults");
