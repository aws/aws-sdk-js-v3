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
 * <fullname>Amazon Elastic Container Service</fullname>
 *         <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes
 *             it easy to run, stop, and manage Docker containers on a cluster. You can host your
 *             cluster on a serverless infrastructure that is managed by Amazon ECS by launching your
 *             services or tasks using the Fargate launch type. For more control, you can host your
 *             tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage by using the EC2
 *             launch type. For more information about launch types, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch
 *             Types</a>.</p>
 *         <p>Amazon ECS lets you launch and stop container-based applications with simple API calls,
 *             allows you to get the state of your cluster from a centralized service, and gives you
 *             access to many familiar Amazon EC2 features.</p>
 *         <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on
 *             your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates
 *             the need for you to operate your own cluster management and configuration management
 *             systems or worry about scaling your management infrastructure.</p>
 */
class ECSClient extends smithy_client_1.Client {
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
exports.ECSClient = ECSClient;
//# sourceMappingURL=ECSClient.js.map