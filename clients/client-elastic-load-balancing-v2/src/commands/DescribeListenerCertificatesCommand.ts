// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeListenerCertificatesInput, DescribeListenerCertificatesOutput } from "../models/models_0";
import { DescribeListenerCertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeListenerCertificatesCommandOutput extends DescribeListenerCertificatesOutput, __MetadataBearer {}

/**
 * Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.
 *
 * If the default certificate is also in the certificate list, it appears twice in the results (once with `IsDefault` set to true and once with `IsDefault` set to false).
 *
 * For more information, see [SSL certificates](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/https-listener-certificates.html) in the *Application Load Balancers Guide* or [Server certificates](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/tls-listener-certificates.html) in the *Network Load Balancers Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
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
 *
 * The specified listener does not exist.
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancingV2 service.
 *
 * @public
 */
export class DescribeListenerCertificatesCommand extends command<DescribeListenerCertificatesCommandInput, DescribeListenerCertificatesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeListenerCertificates",
  DescribeListenerCertificates$
) {
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
