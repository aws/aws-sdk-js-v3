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
 * <p>AWS Performance Insights enables you to monitor and explore different dimensions of
 *       database load based on data captured from a running RDS instance. The guide provides detailed
 *       information about Performance Insights data types, parameters and errors. For more information
 *       about Performance Insights capabilities see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon RDS Performance
 *         Insights </a> in the <i>Amazon RDS User Guide</i>.</p>
 *
 *          <p> The AWS Performance Insights API provides visibility into the performance of your RDS
 *       instance, when Performance Insights is enabled for supported engine types. While Amazon
 *       CloudWatch provides the authoritative source for AWS service vended monitoring metrics, AWS
 *       Performance Insights offers a domain-specific view of database load measured as Average Active
 *       Sessions and provided to API consumers as a 2-dimensional time-series dataset. The time
 *       dimension of the data provides DB load data for each time point in the queried time range, and
 *       each time point decomposes overall load in relation to the requested dimensions, such as SQL,
 *       Wait-event, User or Host, measured at that time point.</p>
 */
class PIClient extends smithy_client_1.Client {
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
exports.PIClient = PIClient;
//# sourceMappingURL=PIClient.js.map