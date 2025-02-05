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
import { ModifyTrustStoreInput, ModifyTrustStoreOutput } from "../models/models_0";
import { de_ModifyTrustStoreCommand, se_ModifyTrustStoreCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTrustStoreCommand}.
 */
export interface ModifyTrustStoreCommandInput extends ModifyTrustStoreInput {}
/**
 * @public
 *
 * The output of {@link ModifyTrustStoreCommand}.
 */
export interface ModifyTrustStoreCommandOutput extends ModifyTrustStoreOutput, __MetadataBearer {}

/**
 * <p>Update the ca certificate bundle for the specified trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyTrustStoreCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyTrustStoreCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // ModifyTrustStoreInput
 *   TrustStoreArn: "STRING_VALUE", // required
 *   CaCertificatesBundleS3Bucket: "STRING_VALUE", // required
 *   CaCertificatesBundleS3Key: "STRING_VALUE", // required
 *   CaCertificatesBundleS3ObjectVersion: "STRING_VALUE",
 * };
 * const command = new ModifyTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTrustStoreOutput
 * //   TrustStores: [ // TrustStores
 * //     { // TrustStore
 * //       Name: "STRING_VALUE",
 * //       TrustStoreArn: "STRING_VALUE",
 * //       Status: "ACTIVE" || "CREATING",
 * //       NumberOfCaCertificates: Number("int"),
 * //       TotalRevokedEntries: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyTrustStoreCommandInput - {@link ModifyTrustStoreCommandInput}
 * @returns {@link ModifyTrustStoreCommandOutput}
 * @see {@link ModifyTrustStoreCommandInput} for command's `input` shape.
 * @see {@link ModifyTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link CaCertificatesBundleNotFoundException} (client fault)
 *  <p>The specified ca certificate bundle does not exist.</p>
 *
 * @throws {@link InvalidCaCertificatesBundleException} (client fault)
 *  <p>The specified ca certificate bundle is in an invalid format, or corrupt.</p>
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *  <p>The specified trust store does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @public
 */
export class ModifyTrustStoreCommand extends $Command
  .classBuilder<
    ModifyTrustStoreCommandInput,
    ModifyTrustStoreCommandOutput,
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
  .s("ElasticLoadBalancing_v10", "ModifyTrustStore", {})
  .n("ElasticLoadBalancingV2Client", "ModifyTrustStoreCommand")
  .f(void 0, void 0)
  .ser(se_ModifyTrustStoreCommand)
  .de(de_ModifyTrustStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTrustStoreInput;
      output: ModifyTrustStoreOutput;
    };
    sdk: {
      input: ModifyTrustStoreCommandInput;
      output: ModifyTrustStoreCommandOutput;
    };
  };
}
