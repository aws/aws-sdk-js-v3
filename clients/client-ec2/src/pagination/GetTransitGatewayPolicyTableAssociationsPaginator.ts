// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTransitGatewayPolicyTableAssociationsCommand,
  GetTransitGatewayPolicyTableAssociationsCommandInput,
  GetTransitGatewayPolicyTableAssociationsCommandOutput,
} from "../commands/GetTransitGatewayPolicyTableAssociationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTransitGatewayPolicyTableAssociations: (
  config: EC2PaginationConfiguration,
  input: GetTransitGatewayPolicyTableAssociationsCommandInput,
  ...rest: any[]
) => Paginator<GetTransitGatewayPolicyTableAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetTransitGatewayPolicyTableAssociationsCommandInput,
  GetTransitGatewayPolicyTableAssociationsCommandOutput
>(EC2Client, GetTransitGatewayPolicyTableAssociationsCommand, "NextToken", "NextToken", "MaxResults");
