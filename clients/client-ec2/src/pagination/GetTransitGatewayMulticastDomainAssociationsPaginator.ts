// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTransitGatewayMulticastDomainAssociationsCommand,
  GetTransitGatewayMulticastDomainAssociationsCommandInput,
  GetTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "../commands/GetTransitGatewayMulticastDomainAssociationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTransitGatewayMulticastDomainAssociations: (
  config: EC2PaginationConfiguration,
  input: GetTransitGatewayMulticastDomainAssociationsCommandInput,
  ...rest: any[]
) => Paginator<GetTransitGatewayMulticastDomainAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetTransitGatewayMulticastDomainAssociationsCommandInput,
  GetTransitGatewayMulticastDomainAssociationsCommandOutput
>(EC2Client, GetTransitGatewayMulticastDomainAssociationsCommand, "NextToken", "NextToken", "MaxResults");
