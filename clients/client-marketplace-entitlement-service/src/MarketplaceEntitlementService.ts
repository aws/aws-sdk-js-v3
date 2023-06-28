// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetEntitlementsCommand,
  GetEntitlementsCommandInput,
  GetEntitlementsCommandOutput,
} from "./commands/GetEntitlementsCommand";
import {
  MarketplaceEntitlementServiceClient,
  MarketplaceEntitlementServiceClientConfig,
} from "./MarketplaceEntitlementServiceClient";

const commands = {
  GetEntitlementsCommand,
};

export interface MarketplaceEntitlementService {
  /**
   * @see {@link GetEntitlementsCommand}
   */
  getEntitlements(
    args: GetEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEntitlementsCommandOutput>;
  getEntitlements(args: GetEntitlementsCommandInput, cb: (err: any, data?: GetEntitlementsCommandOutput) => void): void;
  getEntitlements(
    args: GetEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEntitlementsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>AWS Marketplace Entitlement Service</fullname>
 *          <p>This reference provides descriptions of the AWS Marketplace Entitlement Service
 *    API.</p>
 *          <p>AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to
 *       a given product. An entitlement represents capacity in a product owned by the customer. For
 *       example, a customer might own some number of users or seats in an SaaS application or some
 *       amount of data capacity in a multi-tenant database.</p>
 *          <p>
 *             <b>Getting Entitlement Records</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>GetEntitlements</i>- Gets the entitlements for a Marketplace
 *      product.</p>
 *             </li>
 *          </ul>
 */
export class MarketplaceEntitlementService
  extends MarketplaceEntitlementServiceClient
  implements MarketplaceEntitlementService {}
createAggregatedClient(commands, MarketplaceEntitlementService);
