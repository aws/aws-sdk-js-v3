// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLoadBalancerListenerInput, CreateLoadBalancerListenerOutput } from "../models/models_0";
import { de_CreateLoadBalancerListenersCommand, se_CreateLoadBalancerListenersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLoadBalancerListenersCommand}.
 */
export interface CreateLoadBalancerListenersCommandInput extends CreateLoadBalancerListenerInput {}
/**
 * @public
 *
 * The output of {@link CreateLoadBalancerListenersCommand}.
 */
export interface CreateLoadBalancerListenersCommandOutput extends CreateLoadBalancerListenerOutput, __MetadataBearer {}

/**
 * <p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerListenersCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerListenersCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // CreateLoadBalancerListenerInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Listeners: [ // Listeners // required
 *     { // Listener
 *       Protocol: "STRING_VALUE", // required
 *       LoadBalancerPort: Number("int"), // required
 *       InstanceProtocol: "STRING_VALUE",
 *       InstancePort: Number("int"), // required
 *       SSLCertificateId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLoadBalancerListenersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLoadBalancerListenersCommandInput - {@link CreateLoadBalancerListenersCommandInput}
 * @returns {@link CreateLoadBalancerListenersCommandOutput}
 * @see {@link CreateLoadBalancerListenersCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerListenersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link CertificateNotFoundException} (client fault)
 *  <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM)
 *             or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might
 *             indicate that the certificate is not fully available yet.</p>
 *
 * @throws {@link DuplicateListenerException} (client fault)
 *  <p>A listener already exists for the specified load balancer name and port, but with a different instance port, protocol, or SSL certificate.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link UnsupportedProtocolException} (client fault)
 *  <p>The specified protocol or signature version is not supported.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To create an HTTP listener for a load balancer
 * ```javascript
 * // This example creates a listener for your load balancer at port 80 using the HTTP protocol.
 * const input = {
 *   Listeners: [
 *     {
 *       InstancePort: 80,
 *       InstanceProtocol: "HTTP",
 *       LoadBalancerPort: 80,
 *       Protocol: "HTTP"
 *     }
 *   ],
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new CreateLoadBalancerListenersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example To create an HTTPS listener for a load balancer
 * ```javascript
 * // This example creates a listener for your load balancer at port 443 using the HTTPS protocol.
 * const input = {
 *   Listeners: [
 *     {
 *       InstancePort: 80,
 *       InstanceProtocol: "HTTP",
 *       LoadBalancerPort: 443,
 *       Protocol: "HTTPS",
 *       SSLCertificateId: "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new CreateLoadBalancerListenersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateLoadBalancerListenersCommand extends $Command
  .classBuilder<
    CreateLoadBalancerListenersCommandInput,
    CreateLoadBalancerListenersCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v7", "CreateLoadBalancerListeners", {})
  .n("ElasticLoadBalancingClient", "CreateLoadBalancerListenersCommand")
  .f(void 0, void 0)
  .ser(se_CreateLoadBalancerListenersCommand)
  .de(de_CreateLoadBalancerListenersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLoadBalancerListenerInput;
      output: {};
    };
    sdk: {
      input: CreateLoadBalancerListenersCommandInput;
      output: CreateLoadBalancerListenersCommandOutput;
    };
  };
}
