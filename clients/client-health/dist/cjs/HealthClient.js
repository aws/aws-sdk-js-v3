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
 * <fullname>AWS Health</fullname>
 *
 *          <p>The AWS Health API provides programmatic access to the AWS Health information
 *          that is presented in the <a href="https://phd.aws.amazon.com/phd/home#/">AWS Personal Health Dashboard</a>. You can get information about events that affect your AWS
 *          resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEvents</a>: Summary information about events.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventDetails</a>: Detailed information about one or more
 *                events.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAffectedEntities</a>: Information about AWS resources
 *                that are affected by one or more events.</p>
 *             </li>
 *          </ul>
 *          <p>In addition, these operations provide information about event types and summary
 *          counts of events or affected entities:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEventTypes</a>: Information about the kinds of events
 *                that AWS Health tracks.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventAggregates</a>: A count of the number of events that
 *                meet specified criteria.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEntityAggregates</a>: A count of the number of affected
 *                entities that meet specified criteria.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>AWS Health integrates with AWS Organizations to provide a centralized view of AWS Health
 *          events across all accounts in your organization.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeEventsForOrganization</a>: Summary information about
 *                events across the organization.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAffectedAccountsForOrganization</a>: List of accounts in
 *                your organization impacted by an event.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventDetailsForOrganization</a>: Detailed information
 *                about events in your organization.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAffectedEntitiesForOrganization</a>: Information about
 *                AWS resources in your organization that are affected by events.</p>
 *             </li>
 *          </ul>
 *          <p>You can use the following operations to enable or disable AWS Health from working
 *          with AWS Organizations.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>EnableHealthServiceAccessForOrganization</a>: Enables AWS Health
 *                to work with AWS Organizations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisableHealthServiceAccessForOrganization</a>: Disables
 *                AWS Health from working with AWS Organizations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeHealthServiceStatusForOrganization</a>: Status
 *                information about enabling or disabling AWS Health from working with
 *                AWS Organizations.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>The Health API requires a Business or Enterprise support plan from <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>. Calling the Health API
 *          from an account that does not have a Business or Enterprise support plan causes a
 *             <code>SubscriptionRequiredException</code>.</p>
 *          <p>For authentication of requests, AWS Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *             Process</a>.</p>
 *          <p>See the <a href="https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html">AWS Health User Guide</a> for information about how to use the API.</p>
 *          <p>
 *             <b>Service Endpoint</b>
 *          </p>
 *          <p>The HTTP endpoint for the AWS Health API is:</p>
 *          <ul>
 *             <li>
 *                <p>https://health.us-east-1.amazonaws.com </p>
 *             </li>
 *          </ul>
 */
class HealthClient extends smithy_client_1.Client {
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
exports.HealthClient = HealthClient;
//# sourceMappingURL=HealthClient.js.map