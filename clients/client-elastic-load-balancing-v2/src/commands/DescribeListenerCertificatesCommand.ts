// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeListenerCertificatesInput, DescribeListenerCertificatesOutput } from "../models/models_0";
import { de_DescribeListenerCertificatesCommand, se_DescribeListenerCertificatesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeListenerCertificatesCommand}.
 */
export interface DescribeListenerCertificatesCommandInput extends DescribeListenerCertificatesInput {}
/**
 * @public
 *
 * The output of {@link DescribeListenerCertificatesCommand}.
 */
export interface DescribeListenerCertificatesCommandOutput
  extends DescribeListenerCertificatesOutput,
    __MetadataBearer {}

/**
 * <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS
 *       listener.</p>
 *          <p>If the default certificate is also in the certificate list, it appears twice in the
 *       results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set
 *       to false).</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or
 *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers
 *       Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeListenerCertificatesInput
 *   ListenerArn: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeListenerCertificatesOutput
 * //   Certificates: [ // CertificateList
 * //     { // Certificate
 * //       CertificateArn: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeListenerCertificatesCommandInput - {@link DescribeListenerCertificatesCommandInput}
 * @returns {@link DescribeListenerCertificatesCommandOutput}
 * @see {@link DescribeListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The specified listener does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @public
 */
export class DescribeListenerCertificatesCommand extends $Command
  .classBuilder<
    DescribeListenerCertificatesCommandInput,
    DescribeListenerCertificatesCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "DescribeListenerCertificates", {})
  .n("ElasticLoadBalancingV2Client", "DescribeListenerCertificatesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeListenerCertificatesCommand)
  .de(de_DescribeListenerCertificatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeListenerCertificatesInput;
      output: DescribeListenerCertificatesOutput;
    };
    sdk: {
      input: DescribeListenerCertificatesCommandInput;
      output: DescribeListenerCertificatesCommandOutput;
    };
  };
}
