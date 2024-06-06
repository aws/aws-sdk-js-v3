// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLifecycleHookAnswer, DeleteLifecycleHookType } from "../models/models_0";
import { de_DeleteLifecycleHookCommand, se_DeleteLifecycleHookCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLifecycleHookCommand}.
 */
export interface DeleteLifecycleHookCommandInput extends DeleteLifecycleHookType {}
/**
 * @public
 *
 * The output of {@link DeleteLifecycleHookCommand}.
 */
export interface DeleteLifecycleHookCommandOutput extends DeleteLifecycleHookAnswer, __MetadataBearer {}

/**
 * <p>Deletes the specified lifecycle hook.</p>
 *          <p>If there are any outstanding lifecycle actions, they are completed first
 *                 (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating
 *             instances).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteLifecycleHookCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteLifecycleHookCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DeleteLifecycleHookType
 *   LifecycleHookName: "STRING_VALUE", // required
 *   AutoScalingGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLifecycleHookCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLifecycleHookCommandInput - {@link DeleteLifecycleHookCommandInput}
 * @returns {@link DeleteLifecycleHookCommandOutput}
 * @see {@link DeleteLifecycleHookCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecycleHookCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To delete a lifecycle hook
 * ```javascript
 * // This example deletes the specified lifecycle hook.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "LifecycleHookName": "my-lifecycle-hook"
 * };
 * const command = new DeleteLifecycleHookCommand(input);
 * await client.send(command);
 * // example id: autoscaling-delete-lifecycle-hook-1
 * ```
 *
 */
export class DeleteLifecycleHookCommand extends $Command
  .classBuilder<
    DeleteLifecycleHookCommandInput,
    DeleteLifecycleHookCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "DeleteLifecycleHook", {})
  .n("AutoScalingClient", "DeleteLifecycleHookCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLifecycleHookCommand)
  .de(de_DeleteLifecycleHookCommand)
  .build() {}
