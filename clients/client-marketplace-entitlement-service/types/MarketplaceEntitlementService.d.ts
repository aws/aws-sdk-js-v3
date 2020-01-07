import { MarketplaceEntitlementServiceClient } from "./MarketplaceEntitlementServiceClient";
import { GetEntitlementsCommandInput, GetEntitlementsCommandOutput } from "./commands/GetEntitlementsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
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
export declare class MarketplaceEntitlementService extends MarketplaceEntitlementServiceClient {
    /**
     * <p>GetEntitlements retrieves entitlement values for a given product. The results can be
     *       filtered based on customer identifier or product dimensions.</p>
     */
    getEntitlements(args: GetEntitlementsCommandInput, options?: __HttpHandlerOptions): Promise<GetEntitlementsCommandOutput>;
    getEntitlements(args: GetEntitlementsCommandInput, cb: (err: any, data?: GetEntitlementsCommandOutput) => void): void;
    getEntitlements(args: GetEntitlementsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEntitlementsCommandOutput) => void): void;
}
