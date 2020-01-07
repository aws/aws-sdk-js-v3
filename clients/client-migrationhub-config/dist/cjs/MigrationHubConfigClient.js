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
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your
 *       Migration Hub home region. You can use these APIs to determine a home region, as well as to
 *       create and work with controls that describe the home region.</p>
 *
 *          <p>You can use these APIs within your home region only. If you call these APIs from outside
 *       your home region, your calls are rejected, except for the ability to register your agents and
 *       connectors. </p>
 *
 *          <p> You must call <code>GetHomeRegion</code> at least once before you call any other AWS
 *       Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration
 *       Hub home region.</p>
 *
 *          <p>The <code>StartDataCollection</code> API call in AWS Application Discovery Service allows
 *       your agents and connectors to begin collecting data that flows directly into the home region,
 *       and it will prevent you from enabling data collection information to be sent outside the home
 *       region. </p>
 *
 *          <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region
 *       API reference. </p>
 *
 *          <note>
 *             <p>The Migration Hub Home Region APIs do not support AWS Organizations.</p>
 *          </note>
 */
class MigrationHubConfigClient extends smithy_client_1.Client {
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
exports.MigrationHubConfigClient = MigrationHubConfigClient;
//# sourceMappingURL=MigrationHubConfigClient.js.map