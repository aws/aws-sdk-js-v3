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
 * <p>Amazon EventBridge helps you to respond to state changes in your AWS
 *             resources. When your resources change state, they automatically send events into an
 *             event stream. You can create rules that match selected events in the stream and route
 *             them to targets to take action. You can also use rules to take action on a predetermined
 *             schedule. For example, you can configure rules to:</p>
 *         <ul>
 *             <li>
 *                <p>Automatically invoke an AWS Lambda function to update DNS entries when an event notifies
 *                     you that Amazon EC2 instance enters the running state</p>
 *             </li>
 *             <li>
 *                <p>Direct specific API records from AWS CloudTrail to an Amazon Kinesis data stream for
 *                     detailed analysis of potential security or availability risks</p>
 *             </li>
 *             <li>
 *                <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS
 *                     volume</p>
 *             </li>
 *          </ul>
 *         <p>For more information about the features of Amazon EventBridge, see the
 *             <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/">Amazon EventBridge User Guide</a>.</p>
 */
class EventBridgeClient extends smithy_client_1.Client {
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
exports.EventBridgeClient = EventBridgeClient;
//# sourceMappingURL=EventBridgeClient.js.map