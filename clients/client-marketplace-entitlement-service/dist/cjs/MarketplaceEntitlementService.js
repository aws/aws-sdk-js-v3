"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MarketplaceEntitlementServiceClient_1 = require("./MarketplaceEntitlementServiceClient");
const GetEntitlementsCommand_1 = require("./commands/GetEntitlementsCommand");
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
class MarketplaceEntitlementService extends MarketplaceEntitlementServiceClient_1.MarketplaceEntitlementServiceClient {
    getEntitlements(args, optionsOrCb, cb) {
        const command = new GetEntitlementsCommand_1.GetEntitlementsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.MarketplaceEntitlementService = MarketplaceEntitlementService;
//# sourceMappingURL=MarketplaceEntitlementService.js.map