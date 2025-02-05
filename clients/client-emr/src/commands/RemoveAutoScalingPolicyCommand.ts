// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveAutoScalingPolicyInput, RemoveAutoScalingPolicyOutput } from "../models/models_0";
import { de_RemoveAutoScalingPolicyCommand, se_RemoveAutoScalingPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveAutoScalingPolicyCommand}.
 */
export interface RemoveAutoScalingPolicyCommandInput extends RemoveAutoScalingPolicyInput {}
/**
 * @public
 *
 * The output of {@link RemoveAutoScalingPolicyCommand}.
 */
export interface RemoveAutoScalingPolicyCommandOutput extends RemoveAutoScalingPolicyOutput, __MetadataBearer {}

/**
 * <p>Removes an automatic scaling policy from a specified instance group within an Amazon EMR cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveAutoScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RemoveAutoScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRClient(config);
 * const input = { // RemoveAutoScalingPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 *   InstanceGroupId: "STRING_VALUE", // required
 * };
 * const command = new RemoveAutoScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveAutoScalingPolicyCommandInput - {@link RemoveAutoScalingPolicyCommandInput}
 * @returns {@link RemoveAutoScalingPolicyCommandOutput}
 * @see {@link RemoveAutoScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link RemoveAutoScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class RemoveAutoScalingPolicyCommand extends $Command
  .classBuilder<
    RemoveAutoScalingPolicyCommandInput,
    RemoveAutoScalingPolicyCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "RemoveAutoScalingPolicy", {})
  .n("EMRClient", "RemoveAutoScalingPolicyCommand")
  .f(void 0, void 0)
  .ser(se_RemoveAutoScalingPolicyCommand)
  .de(de_RemoveAutoScalingPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveAutoScalingPolicyInput;
      output: {};
    };
    sdk: {
      input: RemoveAutoScalingPolicyCommandInput;
      output: RemoveAutoScalingPolicyCommandOutput;
    };
  };
}
