// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { LaunchConfigurationNameType } from "../models/models_0";
import { DeleteLaunchConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified launch configuration.
 *
 * The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteLaunchConfigurationCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteLaunchConfigurationCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
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
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link ResourceInUseFault} (client fault)
 *
 * The operation can't be performed because the resource is in use.
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
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
export class DeleteLaunchConfigurationCommand extends command<DeleteLaunchConfigurationCommandInput, DeleteLaunchConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLaunchConfiguration",
  DeleteLaunchConfiguration$
) {
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
