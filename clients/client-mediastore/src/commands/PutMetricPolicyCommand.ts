// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutMetricPolicyInput, PutMetricPolicyOutput } from "../models/models_0";
import { de_PutMetricPolicyCommand, se_PutMetricPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMetricPolicyCommand}.
 */
export interface PutMetricPolicyCommandInput extends PutMetricPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutMetricPolicyCommand}.
 */
export interface PutMetricPolicyCommandOutput extends PutMetricPolicyOutput, __MetadataBearer {}

/**
 * <p>The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, PutMetricPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, PutMetricPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // PutMetricPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 *   MetricPolicy: { // MetricPolicy
 *     ContainerLevelMetrics: "ENABLED" || "DISABLED", // required
 *     MetricPolicyRules: [ // MetricPolicyRules
 *       { // MetricPolicyRule
 *         ObjectGroup: "STRING_VALUE", // required
 *         ObjectGroupName: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new PutMetricPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutMetricPolicyCommandInput - {@link PutMetricPolicyCommandInput}
 * @returns {@link PutMetricPolicyCommandOutput}
 * @see {@link PutMetricPolicyCommandInput} for command's `input` shape.
 * @see {@link PutMetricPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class PutMetricPolicyCommand extends $Command
  .classBuilder<
    PutMetricPolicyCommandInput,
    PutMetricPolicyCommandOutput,
    MediaStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaStoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaStore_20170901", "PutMetricPolicy", {})
  .n("MediaStoreClient", "PutMetricPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutMetricPolicyCommand)
  .de(de_PutMetricPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMetricPolicyInput;
      output: {};
    };
    sdk: {
      input: PutMetricPolicyCommandInput;
      output: PutMetricPolicyCommandOutput;
    };
  };
}
