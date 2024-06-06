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
import { GetTrustStoreCaCertificatesBundleInput, GetTrustStoreCaCertificatesBundleOutput } from "../models/models_0";
import {
  de_GetTrustStoreCaCertificatesBundleCommand,
  se_GetTrustStoreCaCertificatesBundleCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrustStoreCaCertificatesBundleCommand}.
 */
export interface GetTrustStoreCaCertificatesBundleCommandInput extends GetTrustStoreCaCertificatesBundleInput {}
/**
 * @public
 *
 * The output of {@link GetTrustStoreCaCertificatesBundleCommand}.
 */
export interface GetTrustStoreCaCertificatesBundleCommandOutput
  extends GetTrustStoreCaCertificatesBundleOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves the ca certificate bundle.</p>
 *          <p>This action returns a pre-signed S3 URI which is
 *       active for ten minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, GetTrustStoreCaCertificatesBundleCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, GetTrustStoreCaCertificatesBundleCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // GetTrustStoreCaCertificatesBundleInput
 *   TrustStoreArn: "STRING_VALUE", // required
 * };
 * const command = new GetTrustStoreCaCertificatesBundleCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustStoreCaCertificatesBundleOutput
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTrustStoreCaCertificatesBundleCommandInput - {@link GetTrustStoreCaCertificatesBundleCommandInput}
 * @returns {@link GetTrustStoreCaCertificatesBundleCommandOutput}
 * @see {@link GetTrustStoreCaCertificatesBundleCommandInput} for command's `input` shape.
 * @see {@link GetTrustStoreCaCertificatesBundleCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *  <p>The specified trust store does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @public
 */
export class GetTrustStoreCaCertificatesBundleCommand extends $Command
  .classBuilder<
    GetTrustStoreCaCertificatesBundleCommandInput,
    GetTrustStoreCaCertificatesBundleCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "GetTrustStoreCaCertificatesBundle", {})
  .n("ElasticLoadBalancingV2Client", "GetTrustStoreCaCertificatesBundleCommand")
  .f(void 0, void 0)
  .ser(se_GetTrustStoreCaCertificatesBundleCommand)
  .de(de_GetTrustStoreCaCertificatesBundleCommand)
  .build() {}
