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
 * <fullname>Amazon DynamoDB</fullname>
 *
 *
 *          <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and
 *       predictable performance with seamless scalability. DynamoDB lets you offload the
 *       administrative burdens of operating and scaling a distributed database, so that you don't have
 *       to worry about hardware provisioning, setup and configuration, replication, software patching,
 *       or cluster scaling.</p>
 *
 *          <p>With DynamoDB, you can create database tables that can store and retrieve any amount of
 *       data, and serve any level of request traffic. You can scale up or scale down your tables'
 *       throughput capacity without downtime or performance degradation, and use the AWS Management
 *       Console to monitor resource utilization and performance metrics.</p>
 *
 *          <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient
 *       number of servers to handle your throughput and storage requirements, while maintaining
 *       consistent and fast performance. All of your data is stored on solid state disks (SSDs) and
 *       automatically replicated across multiple Availability Zones in an AWS region, providing
 *       built-in high availability and data durability. </p>
 */
class DynamoDBClient extends smithy_client_1.Client {
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
exports.DynamoDBClient = DynamoDBClient;
//# sourceMappingURL=DynamoDBClient.js.map