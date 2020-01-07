"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runtimeConfig_1 = require("./runtimeConfig");
const config_resolver_1 = require("@aws-sdk/config-resolver");
const middleware_content_length_1 = require("@aws-sdk/middleware-content-length");
const middleware_host_header_1 = require("@aws-sdk/middleware-host-header");
const middleware_retry_1 = require("@aws-sdk/middleware-retry");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const middleware_user_agent_1 = require("@aws-sdk/middleware-user-agent");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class MarketplaceEntitlementServiceClient extends smithy_client_1.Client {
    constructor(configuration) {
        let _config_0 = Object.assign(Object.assign({}, runtimeConfig_1.ClientDefaultValues), configuration);
        let _config_1 = config_resolver_1.resolveRegionConfig(_config_0);
        let _config_2 = config_resolver_1.resolveEndpointsConfig(_config_1);
        let _config_3 = middleware_signing_1.resolveAwsAuthConfig(_config_2);
        let _config_4 = middleware_retry_1.resolveRetryConfig(_config_3);
        let _config_5 = middleware_user_agent_1.resolveUserAgentConfig(_config_4);
        let _config_6 = middleware_host_header_1.resolveHostHeaderConfig(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(this.config));
        this.middlewareStack.use(middleware_retry_1.getRetryPlugin(this.config));
        this.middlewareStack.use(middleware_user_agent_1.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middleware_content_length_1.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middleware_host_header_1.getHostHeaderPlugin(this.config));
    }
    destroy() { }
}
exports.MarketplaceEntitlementServiceClient = MarketplaceEntitlementServiceClient;
//# sourceMappingURL=MarketplaceEntitlementServiceClient.js.map