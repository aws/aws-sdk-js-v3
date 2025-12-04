// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetEntitlementsCommand,
  GetEntitlementsCommandInput,
  GetEntitlementsCommandOutput,
} from "../commands/GetEntitlementsCommand";
import { MarketplaceEntitlementServiceClient } from "../MarketplaceEntitlementServiceClient";
import { MarketplaceEntitlementServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEntitlements: (
  config: MarketplaceEntitlementServicePaginationConfiguration,
  input: GetEntitlementsCommandInput,
  ...rest: any[]
) => Paginator<GetEntitlementsCommandOutput> = createPaginator<
  MarketplaceEntitlementServicePaginationConfiguration,
  GetEntitlementsCommandInput,
  GetEntitlementsCommandOutput
>(MarketplaceEntitlementServiceClient, GetEntitlementsCommand, "NextToken", "NextToken", "MaxResults");
