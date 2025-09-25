// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddListenerCertificatesInput, AddListenerCertificatesOutput } from "../models/models_0";
import { AddListenerCertificates } from "../schemas/schemas_9_Listener";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddListenerCertificatesCommand}.
 */
export interface AddListenerCertificatesCommandInput extends AddListenerCertificatesInput {}
/**
 * @public
 *
 * The output of {@link AddListenerCertificatesCommand}.
 */
export interface AddListenerCertificatesCommandOutput extends AddListenerCertificatesOutput, __MetadataBearer {}

/**
 * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS
 *       or TLS listener.</p>
 *          <p>If the certificate in already in the certificate list, the call is successful but the
 *       certificate is not added again.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/https-listener-certificates.html">SSL
 *         certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/tls-listener-certificates.html">Server
 *         certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, AddListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, AddListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // AddListenerCertificatesInput
 *   ListenerArn: "STRING_VALUE", // required
 *   Certificates: [ // CertificateList // required
 *     { // Certificate
 *       CertificateArn: "STRING_VALUE",
 *       IsDefault: true || false,
 *     },
 *   ],
 * };
 * const command = new AddListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // AddListenerCertificatesOutput
 * //   Certificates: [ // CertificateList
 * //     { // Certificate
 * //       CertificateArn: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddListenerCertificatesCommandInput - {@link AddListenerCertificatesCommandInput}
 * @returns {@link AddListenerCertificatesCommandOutput}
 * @see {@link AddListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link AddListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link CertificateNotFoundException} (client fault)
 *  <p>The specified certificate does not exist.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The specified listener does not exist.</p>
 *
 * @throws {@link TooManyCertificatesException} (client fault)
 *  <p>You've reached the limit on the number of certificates per load balancer.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @public
 */
export class AddListenerCertificatesCommand extends $Command
  .classBuilder<
    AddListenerCertificatesCommandInput,
    AddListenerCertificatesCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "AddListenerCertificates", {})
  .n("ElasticLoadBalancingV2Client", "AddListenerCertificatesCommand")
  .sc(AddListenerCertificates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddListenerCertificatesInput;
      output: AddListenerCertificatesOutput;
    };
    sdk: {
      input: AddListenerCertificatesCommandInput;
      output: AddListenerCertificatesCommandOutput;
    };
  };
}
