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
 * <fullname>Amazon CloudWatch Application Insights for .NET and SQL Server</fullname>
 *          <p> Amazon CloudWatch Application Insights for .NET and SQL Server is a service that
 *          helps you detect common problems with your .NET and SQL Server-based applications. It
 *          enables you to pinpoint the source of issues in your applications (built with technologies
 *          such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into
 *          detected problems.</p>
 *          <p>After you onboard your application, CloudWatch Application Insights for .NET and SQL
 *          Server identifies, recommends, and sets up metrics and logs. It continuously analyzes and
 *          correlates your metrics and logs for unusual behavior to surface actionable problems with
 *          your application. For example, if your application is slow and unresponsive and leading to
 *          HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you
 *          that a memory pressure problem with your SQL Server database is occurring. It bases this
 *          analysis on impactful metrics and log errors. </p>
 */
class ApplicationInsightsClient extends smithy_client_1.Client {
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
exports.ApplicationInsightsClient = ApplicationInsightsClient;
//# sourceMappingURL=ApplicationInsightsClient.js.map