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
import { RemoveListenerCertificatesInput, RemoveListenerCertificatesOutput } from "../models/models_0";
import { RemoveListenerCertificates } from "../schemas/schemas_9_Listener";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveListenerCertificatesCommand}.
 */
export interface RemoveListenerCertificatesCommandInput extends RemoveListenerCertificatesInput {}
/**
 * @public
 *
 * The output of {@link RemoveListenerCertificatesCommand}.
 */
export interface RemoveListenerCertificatesCommandOutput extends RemoveListenerCertificatesOutput, __MetadataBearer {}

/**
 * <p>Removes the specified certificate from the certificate list for the specified HTTPS or TLS
 *       listener.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, RemoveListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, RemoveListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // RemoveListenerCertificatesInput
 *   ListenerArn: "STRING_VALUE", // required
 *   Certificates: [ // CertificateList // required
 *     { // Certificate
 *       CertificateArn: "STRING_VALUE",
 *       IsDefault: true || false,
 *     },
 *   ],
 * };
 * const command = new RemoveListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveListenerCertificatesCommandInput - {@link RemoveListenerCertificatesCommandInput}
 * @returns {@link RemoveListenerCertificatesCommandOutput}
 * @see {@link RemoveListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link RemoveListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The specified listener does not exist.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @public
 */
export class RemoveListenerCertificatesCommand extends $Command
  .classBuilder<
    RemoveListenerCertificatesCommandInput,
    RemoveListenerCertificatesCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "RemoveListenerCertificates", {})
  .n("ElasticLoadBalancingV2Client", "RemoveListenerCertificatesCommand")
  .sc(RemoveListenerCertificates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveListenerCertificatesInput;
      output: {};
    };
    sdk: {
      input: RemoveListenerCertificatesCommandInput;
      output: RemoveListenerCertificatesCommandOutput;
    };
  };
}
