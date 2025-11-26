// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCustomerGatewayAssociationsCommand,
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput,
} from "../commands/GetCustomerGatewayAssociationsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCustomerGatewayAssociations: (
  config: NetworkManagerPaginationConfiguration,
  input: GetCustomerGatewayAssociationsCommandInput,
  ...rest: any[]
) => Paginator<GetCustomerGatewayAssociationsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput
>(NetworkManagerClient, GetCustomerGatewayAssociationsCommand, "NextToken", "NextToken", "MaxResults");
