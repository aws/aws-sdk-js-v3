// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTransitGatewayPrefixListReferencesCommand,
  GetTransitGatewayPrefixListReferencesCommandInput,
  GetTransitGatewayPrefixListReferencesCommandOutput,
} from "../commands/GetTransitGatewayPrefixListReferencesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTransitGatewayPrefixListReferences: (
  config: EC2PaginationConfiguration,
  input: GetTransitGatewayPrefixListReferencesCommandInput,
  ...rest: any[]
) => Paginator<GetTransitGatewayPrefixListReferencesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetTransitGatewayPrefixListReferencesCommandInput,
  GetTransitGatewayPrefixListReferencesCommandOutput
>(EC2Client, GetTransitGatewayPrefixListReferencesCommand, "NextToken", "NextToken", "MaxResults");
