// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLoadBalancerListenerInput, CreateLoadBalancerListenerOutput } from "../models/models_0";
import { CreateLoadBalancerListeners$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.
 *
 * For more information, see [Listeners for Your Classic Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html) in the *Classic Load Balancers Guide*.
 *
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
 *
 * The specified load balancer does not exist.
 *
 * @throws {@link CertificateNotFoundException} (client fault)
 *
 * The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM) or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might indicate that the certificate is not fully available yet.
 *
 * @throws {@link DuplicateListenerException} (client fault)
 *
 * A listener already exists for the specified load balancer name and port, but with a different instance port, protocol, or SSL certificate.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *
 * The requested configuration change is not valid.
 *
 * @throws {@link UnsupportedProtocolException} (client fault)
 *
 * The specified protocol or signature version is not supported.
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancing service.
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
export class CreateLoadBalancerListenersCommand extends command<CreateLoadBalancerListenersCommandInput, CreateLoadBalancerListenersCommandOutput>(
  _ep0,
  _mw0,
  "CreateLoadBalancerListeners",
  CreateLoadBalancerListeners$
) {
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
