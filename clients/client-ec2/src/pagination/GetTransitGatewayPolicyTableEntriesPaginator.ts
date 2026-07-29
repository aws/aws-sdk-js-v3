// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTransitGatewayPolicyTableEntriesCommand,
  GetTransitGatewayPolicyTableEntriesCommandInput,
  GetTransitGatewayPolicyTableEntriesCommandOutput,
} from "../commands/GetTransitGatewayPolicyTableEntriesCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTransitGatewayPolicyTableEntries: (
  config: EC2PaginationConfiguration,
  input: GetTransitGatewayPolicyTableEntriesCommandInput,
  ...rest: any[]
) => Paginator<GetTransitGatewayPolicyTableEntriesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetTransitGatewayPolicyTableEntriesCommandInput,
  GetTransitGatewayPolicyTableEntriesCommandOutput
>(EC2Client, GetTransitGatewayPolicyTableEntriesCommand, "NextToken", "NextToken", "MaxResults");
