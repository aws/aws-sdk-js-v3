// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopInstancesRequest, StopInstancesResult } from "../models/models_7";
import { de_StopInstancesCommand, se_StopInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopInstancesCommand}.
 */
export interface StopInstancesCommandInput extends StopInstancesRequest {}
/**
 * @public
 *
 * The output of {@link StopInstancesCommand}.
 */
export interface StopInstancesCommandOutput extends StopInstancesResult, __MetadataBearer {}

/**
 * <p>Stops an Amazon EBS-backed instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stop and start
 *                 your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>You can use the Stop action to hibernate an instance if the instance is <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enabling-hibernation.html">enabled for
 *                 hibernation</a> and it meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 *          <p>We don't charge usage for a stopped instance, or data transfer fees; however, your
 *             root partition Amazon EBS volume remains and continues to persist your data, and you are
 *             charged for Amazon EBS volume usage. Every time you start your instance, Amazon EC2
 *             charges a one-minute minimum for instance usage, and thereafter charges per second for
 *             instance usage.</p>
 *          <p>You can't stop or hibernate instance store-backed instances. You can't use the Stop
 *             action to hibernate Spot Instances, but you can specify that Amazon EC2 should hibernate
 *             Spot Instances when they are interrupted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html#hibernate-spot-instances">Hibernating interrupted Spot Instances</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 *          <p>When you stop or hibernate an instance, we shut it down. You can restart your instance
 *             at any time. Before stopping or hibernating an instance, make sure it is in a state from
 *             which it can be restarted. Stopping an instance does not preserve data stored in RAM,
 *             but hibernating an instance does preserve data stored in RAM. If an instance cannot
 *             hibernate successfully, a normal shutdown occurs.</p>
 *          <p>Stopping and hibernating an instance is different to rebooting or terminating it. For
 *             example, when you stop or hibernate an instance, the root device and any other devices
 *             attached to the instance persist. When you terminate an instance, the root device and
 *             any other devices attached during the instance launch are automatically deleted. For
 *             more information about the differences between rebooting, stopping, hibernating, and
 *             terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
 *             in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>When you stop an instance, we attempt to shut it down forcibly after a short while. If
 *             your instance appears stuck in the stopping state after a period of time, there may be
 *             an issue with the underlying host computer. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshoot
 *                 stopping your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StopInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StopInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // StopInstancesRequest
 *   InstanceIds: [ // InstanceIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   Hibernate: true || false,
 *   DryRun: true || false,
 *   Force: true || false,
 * };
 * const command = new StopInstancesCommand(input);
 * const response = await client.send(command);
 * // { // StopInstancesResult
 * //   StoppingInstances: [ // InstanceStateChangeList
 * //     { // InstanceStateChange
 * //       CurrentState: { // InstanceState
 * //         Code: Number("int"),
 * //         Name: "pending" || "running" || "shutting-down" || "terminated" || "stopping" || "stopped",
 * //       },
 * //       InstanceId: "STRING_VALUE",
 * //       PreviousState: {
 * //         Code: Number("int"),
 * //         Name: "pending" || "running" || "shutting-down" || "terminated" || "stopping" || "stopped",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param StopInstancesCommandInput - {@link StopInstancesCommandInput}
 * @returns {@link StopInstancesCommandOutput}
 * @see {@link StopInstancesCommandInput} for command's `input` shape.
 * @see {@link StopInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To stop a running EC2 instance
 * ```javascript
 * // This example stops the specified EC2 instance.
 * const input = {
 *   "InstanceIds": [
 *     "i-1234567890abcdef0"
 *   ]
 * };
 * const command = new StopInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "StoppingInstances": [
 *     {
 *       "CurrentState": {
 *         "Code": 64,
 *         "Name": "stopping"
 *       },
 *       "InstanceId": "i-1234567890abcdef0",
 *       "PreviousState": {
 *         "Code": 16,
 *         "Name": "running"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-stop-a-running-ec2-instance-1529358905540
 * ```
 *
 */
export class StopInstancesCommand extends $Command
  .classBuilder<
    StopInstancesCommandInput,
    StopInstancesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "StopInstances", {})
  .n("EC2Client", "StopInstancesCommand")
  .f(void 0, void 0)
  .ser(se_StopInstancesCommand)
  .de(de_StopInstancesCommand)
  .build() {}
