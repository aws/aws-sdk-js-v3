// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveManagedScalingPolicyInput, RemoveManagedScalingPolicyOutput } from "../models/models_0";
import { de_RemoveManagedScalingPolicyCommand, se_RemoveManagedScalingPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveManagedScalingPolicyCommand}.
 */
export interface RemoveManagedScalingPolicyCommandInput extends RemoveManagedScalingPolicyInput {}
/**
 * @public
 *
 * The output of {@link RemoveManagedScalingPolicyCommand}.
 */
export interface RemoveManagedScalingPolicyCommandOutput extends RemoveManagedScalingPolicyOutput, __MetadataBearer {}

/**
 * <p> Removes a managed scaling policy from a specified Amazon EMR cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveManagedScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RemoveManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // RemoveManagedScalingPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new RemoveManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveManagedScalingPolicyCommandInput - {@link RemoveManagedScalingPolicyCommandInput}
 * @returns {@link RemoveManagedScalingPolicyCommandOutput}
 * @see {@link RemoveManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link RemoveManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class RemoveManagedScalingPolicyCommand extends $Command
  .classBuilder<
    RemoveManagedScalingPolicyCommandInput,
    RemoveManagedScalingPolicyCommandOutput,
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
  .s("ElasticMapReduce", "RemoveManagedScalingPolicy", {})
  .n("EMRClient", "RemoveManagedScalingPolicyCommand")
  .f(void 0, void 0)
  .ser(se_RemoveManagedScalingPolicyCommand)
  .de(de_RemoveManagedScalingPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveManagedScalingPolicyInput;
      output: {};
    };
    sdk: {
      input: RemoveManagedScalingPolicyCommandInput;
      output: RemoveManagedScalingPolicyCommandOutput;
    };
  };
}
