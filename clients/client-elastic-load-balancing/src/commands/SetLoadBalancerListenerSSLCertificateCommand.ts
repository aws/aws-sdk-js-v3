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
import {
  SetLoadBalancerListenerSSLCertificateInput,
  SetLoadBalancerListenerSSLCertificateOutput,
} from "../models/models_0";
import {
  de_SetLoadBalancerListenerSSLCertificateCommand,
  se_SetLoadBalancerListenerSSLCertificateCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetLoadBalancerListenerSSLCertificateCommand}.
 */
export interface SetLoadBalancerListenerSSLCertificateCommandInput extends SetLoadBalancerListenerSSLCertificateInput {}
/**
 * @public
 *
 * The output of {@link SetLoadBalancerListenerSSLCertificateCommand}.
 */
export interface SetLoadBalancerListenerSSLCertificateCommandOutput
  extends SetLoadBalancerListenerSSLCertificateOutput,
    __MetadataBearer {}

/**
 * <p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p>
 *
 *         <p>For more information about updating your SSL certificate, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a>
 *                 in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerListenerSSLCertificateCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerListenerSSLCertificateCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // SetLoadBalancerListenerSSLCertificateInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   LoadBalancerPort: Number("int"), // required
 *   SSLCertificateId: "STRING_VALUE", // required
 * };
 * const command = new SetLoadBalancerListenerSSLCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetLoadBalancerListenerSSLCertificateCommandInput - {@link SetLoadBalancerListenerSSLCertificateCommandInput}
 * @returns {@link SetLoadBalancerListenerSSLCertificateCommandOutput}
 * @see {@link SetLoadBalancerListenerSSLCertificateCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerListenerSSLCertificateCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The load balancer does not have a listener configured at the specified port.</p>
 *
 * @throws {@link UnsupportedProtocolException} (client fault)
 *  <p>The specified protocol or signature version is not supported.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @public
 * @example To update the SSL certificate for an HTTPS listener
 * ```javascript
 * // This example replaces the existing SSL certificate for the specified HTTPS listener.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "LoadBalancerPort": 443,
 *   "SSLCertificateId": "arn:aws:iam::123456789012:server-certificate/new-server-cert"
 * };
 * const command = new SetLoadBalancerListenerSSLCertificateCommand(input);
 * await client.send(command);
 * // example id: elb-set-load-balancer-listener-ssl-certificate-1
 * ```
 *
 */
export class SetLoadBalancerListenerSSLCertificateCommand extends $Command
  .classBuilder<
    SetLoadBalancerListenerSSLCertificateCommandInput,
    SetLoadBalancerListenerSSLCertificateCommandOutput,
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
  .s("ElasticLoadBalancing_v7", "SetLoadBalancerListenerSSLCertificate", {})
  .n("ElasticLoadBalancingClient", "SetLoadBalancerListenerSSLCertificateCommand")
  .f(void 0, void 0)
  .ser(se_SetLoadBalancerListenerSSLCertificateCommand)
  .de(de_SetLoadBalancerListenerSSLCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetLoadBalancerListenerSSLCertificateInput;
      output: {};
    };
    sdk: {
      input: SetLoadBalancerListenerSSLCertificateCommandInput;
      output: SetLoadBalancerListenerSSLCertificateCommandOutput;
    };
  };
}
