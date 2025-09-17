// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachInstancesQuery } from "../models/models_0";
import { de_AttachInstancesCommand, se_AttachInstancesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachInstancesCommand}.
 */
export interface AttachInstancesCommandInput extends AttachInstancesQuery {}
/**
 * @public
 *
 * The output of {@link AttachInstancesCommand}.
 */
export interface AttachInstancesCommandOutput extends __MetadataBearer {}

/**
 * <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p>
 *          <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the
 *             number of instances being attached. If the number of instances being attached plus the
 *             desired capacity of the group exceeds the maximum size of the group, the operation
 *             fails.</p>
 *          <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are
 *             also registered with the load balancer. If there are target groups attached to your Auto Scaling
 *             group, the instances are also registered with the target groups.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-detach-attach-instances.html">Detach
 *                 or attach instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachInstancesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachInstancesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // AttachInstancesQuery
 *   InstanceIds: [ // InstanceIds
 *     "STRING_VALUE",
 *   ],
 *   AutoScalingGroupName: "STRING_VALUE", // required
 * };
 * const command = new AttachInstancesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachInstancesCommandInput - {@link AttachInstancesCommandInput}
 * @returns {@link AttachInstancesCommandOutput}
 * @see {@link AttachInstancesCommandInput} for command's `input` shape.
 * @see {@link AttachInstancesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To attach an instance to an Auto Scaling group
 * ```javascript
 * // This example attaches the specified instance to the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   InstanceIds: [
 *     "i-93633f9b"
 *   ]
 * };
 * const command = new AttachInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AttachInstancesCommand extends $Command
  .classBuilder<
    AttachInstancesCommandInput,
    AttachInstancesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "AttachInstances", {})
  .n("AutoScalingClient", "AttachInstancesCommand")
  .f(void 0, void 0)
  .ser(se_AttachInstancesCommand)
  .de(de_AttachInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachInstancesQuery;
      output: {};
    };
    sdk: {
      input: AttachInstancesCommandInput;
      output: AttachInstancesCommandOutput;
    };
  };
}
