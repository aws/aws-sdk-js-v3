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
 * <fullname>AWS CloudFormation</fullname>
 *          <p>AWS CloudFormation allows you to create and manage AWS infrastructure deployments
 *          predictably and repeatedly. You can use AWS CloudFormation to leverage AWS products, such
 *          as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification
 *          Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly
 *          scalable, cost-effective applications without creating or configuring the underlying AWS
 *          infrastructure.</p>
 *          <p>With AWS CloudFormation, you declare all of your resources and dependencies in a
 *          template file. The template defines a collection of resources as a single unit called a
 *          stack. AWS CloudFormation creates and deletes all member resources of the stack together
 *          and manages all dependencies between the resources for you.</p>
 *          <p>For more information about AWS CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">AWS CloudFormation Product Page</a>.</p>
 *          <p>Amazon CloudFormation makes use of other AWS products. If you need additional
 *          technical information about a specific AWS product, you can find the product's technical
 *          documentation at <a href="https://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>
 */
class CloudFormationClient extends smithy_client_1.Client {
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
exports.CloudFormationClient = CloudFormationClient;
//# sourceMappingURL=CloudFormationClient.js.map