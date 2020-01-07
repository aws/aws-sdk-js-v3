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
 * <fullname>AWS Marketplace Metering Service</fullname>
 *         <p>This reference provides descriptions of the low-level AWS Marketplace Metering
 *             Service API.</p>
 *         <p>AWS Marketplace sellers can use this API to submit usage data for custom usage
 *             dimensions.</p>
 *         <p>
 *             <b>Submitting Metering Records</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>MeterUsage</i>- Submits the metering record for a Marketplace
 *                     product. MeterUsage is called from an EC2 instance or a container running on EKS
 *                     or ECS.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <i>BatchMeterUsage</i>- Submits the metering record for a set of
 *                     customers. BatchMeterUsage is called from a software-as-a-service (SaaS)
 *                     application.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Accepting New Customers</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>ResolveCustomer</i>- Called by a SaaS application during the
 *                     registration process. When a buyer visits your website during the registration
 *                     process, the buyer submits a Registration Token through the browser. The
 *                     Registration Token is resolved through this API to obtain a CustomerIdentifier
 *                     and Product Code.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Entitlement and Metering for Paid Container Products</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p> Paid container software products sold through AWS Marketplace must
 *                     integrate with the AWS Marketplace Metering Service and call the RegisterUsage
 *                     operation for software entitlement and metering. Free and BYOL products for
 *                     Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you can do
 *                     so if you want to receive usage data in your seller reports. For more
 *                     information on using the RegisterUsage operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-Based Products</a>. </p>
 *             </li>
 *          </ul>
 *         <p>BatchMeterUsage API calls are captured by AWS CloudTrail. You can use Cloudtrail to
 *             verify that the SaaS metering records that you sent are accurate by searching for
 *             records with the eventName of BatchMeterUsage. You can also use CloudTrail to audit
 *             records over time. For more information, see the <i>
 *                <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">AWS CloudTrail User Guide</a>
 *             </i>.</p>
 */
class MarketplaceMeteringClient extends smithy_client_1.Client {
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
exports.MarketplaceMeteringClient = MarketplaceMeteringClient;
//# sourceMappingURL=MarketplaceMeteringClient.js.map