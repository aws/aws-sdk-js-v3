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
 * <p>Here's how you set up to query an Amazon Route 53 private hosted zone from your network:</p>
 *
 * 		       <ol>
 *             <li>
 *                <p>Connect your network to a VPC using AWS Direct Connect or a VPN.</p>
 *             </li>
 *             <li>
 *                <p>Run the following AWS CLI command to create a Resolver endpoint:</p>
 * 				           <p>
 *                   <code>create-resolver-endpoint --name [endpoint_name] --direction INBOUND
 * 					--creator-request-id [unique_string] --security-group-ids [security_group_with_inbound_rules]
 * 					--ip-addresses SubnetId=[subnet_id] SubnetId=[subnet_id_in_different_AZ]</code>
 *                </p>
 * 				           <p>Note the resolver endpoint ID that appears in the response. You'll use it in step 3.</p>
 * 			         </li>
 *             <li>
 *                <p>Get the IP addresses for the Resolver endpoints:</p>
 * 				           <p>
 *                   <code>get-resolver-endpoint --resolver-endpoint-id [resolver_endpoint_id]</code>
 *                </p>
 * 			         </li>
 *             <li>
 *                <p>In your network configuration, define the IP addresses that you got in step 3 as DNS servers.</p>
 * 				           <p>You can now query instance names in your VPCs and the names of records in your private hosted zone.</p>
 * 			         </li>
 *          </ol>
 *
 * 		       <p>You can also perform the following operations using the AWS CLI:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <code>list-resolver-endpoints</code>: List all endpoints. The syntax includes options for pagination and filtering.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>update-resolver-endpoints</code>: Add IP addresses to an endpoint or remove IP addresses from an endpoint. </p>
 *             </li>
 *          </ul>
 *
 * 		       <p>To delete an endpoint, use the following AWS CLI command:</p>
 * 		       <p>
 *             <code>delete-resolver-endpoint --resolver-endpoint-id [resolver_endpoint_id]</code>
 *          </p>
 */
class Route53ResolverClient extends smithy_client_1.Client {
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
exports.Route53ResolverClient = Route53ResolverClient;
//# sourceMappingURL=Route53ResolverClient.js.map