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
 * <fullname>Elastic Load Balancing</fullname>
 *
 *          <p>A load balancer distributes incoming traffic across targets, such as your EC2
 *       instances. This enables you to increase the availability of your application. The load
 *       balancer also monitors the health of its registered targets and ensures that it routes traffic
 *       only to healthy targets. You configure your load balancer to accept incoming traffic by
 *       specifying one or more listeners, which are configured with a protocol and port number for
 *       connections from clients to the load balancer. You configure a target group with a protocol
 *       and port number for connections from the load balancer to the targets, and with health check
 *       settings to be used when checking the health status of the targets.</p>
 *
 *          <p>Elastic Load Balancing supports the following types of load balancers: Application Load
 *       Balancers, Network Load Balancers, and Classic Load Balancers. This reference covers
 *       Application Load Balancers and Network Load Balancers.</p>
 *          <p>An Application Load Balancer makes routing and load balancing decisions at the
 *       application layer (HTTP/HTTPS). A Network Load Balancer makes routing and load balancing
 *       decisions at the transport layer (TCP/TLS). Both Application Load Balancers and Network Load
 *       Balancers can route requests to one or more ports on each EC2 instance or container instance
 *       in your virtual private cloud (VPC). For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User
 *       Guide</a>.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>All Elastic Load Balancing operations are idempotent, which means that they complete at
 *       most one time. If you repeat an operation, it succeeds.</p>
 */
class ElasticLoadBalancingv2Client extends smithy_client_1.Client {
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
exports.ElasticLoadBalancingv2Client = ElasticLoadBalancingv2Client;
//# sourceMappingURL=ElasticLoadBalancingv2Client.js.map