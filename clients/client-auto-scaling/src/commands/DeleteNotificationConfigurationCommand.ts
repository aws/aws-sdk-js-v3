// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteNotificationConfigurationType } from "../models/models_0";
import { DeleteNotificationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNotificationConfigurationCommand}.
 */
export interface DeleteNotificationConfigurationCommandInput extends DeleteNotificationConfigurationType {}
/**
 * @public
 *
 * The output of {@link DeleteNotificationConfigurationCommand}.
 */
export interface DeleteNotificationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified notification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteNotificationConfigurationCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteNotificationConfigurationCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DeleteNotificationConfigurationType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TopicARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotificationConfigurationCommandInput - {@link DeleteNotificationConfigurationCommandInput}
 * @returns {@link DeleteNotificationConfigurationCommandOutput}
 * @see {@link DeleteNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To delete an Auto Scaling notification
 * ```javascript
 * // This example deletes the specified notification from the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   TopicARN: "arn:aws:sns:us-west-2:123456789012:my-sns-topic"
 * };
 * const command = new DeleteNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteNotificationConfigurationCommand extends $Command
  .classBuilder<
    DeleteNotificationConfigurationCommandInput,
    DeleteNotificationConfigurationCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "DeleteNotificationConfiguration", {})
  .n("AutoScalingClient", "DeleteNotificationConfigurationCommand")
  .sc(DeleteNotificationConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotificationConfigurationType;
      output: {};
    };
    sdk: {
      input: DeleteNotificationConfigurationCommandInput;
      output: DeleteNotificationConfigurationCommandOutput;
    };
  };
}
