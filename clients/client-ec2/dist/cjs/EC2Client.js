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
 * <fullname>Amazon Elastic Compute Cloud</fullname>
 *          <p>Amazon Elastic Compute Cloud (Amazon EC2) provides secure and resizable computing capacity in the AWS cloud.
 *           Using Amazon EC2 eliminates the need to invest in hardware up front, so you can develop and
 *           deploy applications faster.</p>
 *          <p>To learn more, see the following resources:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon EC2: <a href="http://aws.amazon.com/ec2">AmazonEC2 product page</a>, <a href="http://aws.amazon.com/documentation/ec2">Amazon EC2 documentation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon EBS: <a href="http://aws.amazon.com/ebs">Amazon EBS product page</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html">Amazon EBS documentation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon VPC: <a href="http://aws.amazon.com/vpc">Amazon VPC product page</a>, <a href="http://aws.amazon.com/documentation/vpc">Amazon VPC documentation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>AWS VPN: <a href="http://aws.amazon.com/vpn">AWS VPN product page</a>, <a href="http://aws.amazon.com/documentation/vpn">AWS VPN documentation</a>
 *                </p>
 *             </li>
 *          </ul>
 */
class EC2Client extends smithy_client_1.Client {
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
exports.EC2Client = EC2Client;
//# sourceMappingURL=EC2Client.js.map