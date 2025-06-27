// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { LaunchConfigurationNameType } from "../models/models_0";
import { de_DeleteLaunchConfigurationCommand, se_DeleteLaunchConfigurationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLaunchConfigurationCommand}.
 */
export interface DeleteLaunchConfigurationCommandInput extends LaunchConfigurationNameType {}
/**
 * @public
 *
 * The output of {@link DeleteLaunchConfigurationCommand}.
 */
export interface DeleteLaunchConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified launch configuration.</p>
 *          <p>The launch configuration must not be attached to an Auto Scaling group. When this call
 *             completes, the launch configuration is no longer available for use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteLaunchConfigurationCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteLaunchConfigurationCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // LaunchConfigurationNameType
 *   LaunchConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLaunchConfigurationCommandInput - {@link DeleteLaunchConfigurationCommandInput}
 * @returns {@link DeleteLaunchConfigurationCommandOutput}
 * @see {@link DeleteLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ResourceInUseFault} (client fault)
 *  <p>The operation can't be performed because the resource is in use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To delete a launch configuration
 * ```javascript
 * // This example deletes the specified launch configuration.
 * const input = {
 *   LaunchConfigurationName: "my-launch-config"
 * };
 * const command = new DeleteLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLaunchConfigurationCommand extends $Command
  .classBuilder<
    DeleteLaunchConfigurationCommandInput,
    DeleteLaunchConfigurationCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "DeleteLaunchConfiguration", {})
  .n("AutoScalingClient", "DeleteLaunchConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLaunchConfigurationCommand)
  .de(de_DeleteLaunchConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LaunchConfigurationNameType;
      output: {};
    };
    sdk: {
      input: DeleteLaunchConfigurationCommandInput;
      output: DeleteLaunchConfigurationCommandOutput;
    };
  };
}
