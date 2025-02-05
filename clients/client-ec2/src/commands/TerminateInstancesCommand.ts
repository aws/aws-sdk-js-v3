// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { TerminateInstancesRequest, TerminateInstancesResult } from "../models/models_7";
import { de_TerminateInstancesCommand, se_TerminateInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateInstancesCommand}.
 */
export interface TerminateInstancesCommandInput extends TerminateInstancesRequest {}
/**
 * @public
 *
 * The output of {@link TerminateInstancesCommand}.
 */
export interface TerminateInstancesCommandOutput extends TerminateInstancesResult, __MetadataBearer {}

/**
 * <p>Shuts down the specified instances. This operation is idempotent; if you terminate an
 *             instance more than once, each call succeeds. </p>
 *          <p>If you specify multiple instances and the request fails (for example, because of a
 *             single incorrect instance ID), none of the instances are terminated.</p>
 *          <p>If you terminate multiple instances across multiple Availability Zones, and one or
 *             more of the specified instances are enabled for termination protection, the request
 *             fails with the following results:</p>
 *          <ul>
 *             <li>
 *                <p>The specified instances that are in the same Availability Zone as the
 *                     protected instance are not terminated.</p>
 *             </li>
 *             <li>
 *                <p>The specified instances that are in different Availability Zones, where no
 *                     other specified instances are protected, are successfully terminated.</p>
 *             </li>
 *          </ul>
 *          <p>For example, say you have the following instances:</p>
 *          <ul>
 *             <li>
 *                <p>Instance A: <code>us-east-1a</code>; Not protected</p>
 *             </li>
 *             <li>
 *                <p>Instance B: <code>us-east-1a</code>; Not protected</p>
 *             </li>
 *             <li>
 *                <p>Instance C: <code>us-east-1b</code>; Protected</p>
 *             </li>
 *             <li>
 *                <p>Instance D: <code>us-east-1b</code>; not protected</p>
 *             </li>
 *          </ul>
 *          <p>If you attempt to terminate all of these instances in the same request, the request
 *             reports failure with the following results:</p>
 *          <ul>
 *             <li>
 *                <p>Instance A and Instance B are successfully terminated because none of the
 *                     specified instances in <code>us-east-1a</code> are enabled for termination
 *                     protection.</p>
 *             </li>
 *             <li>
 *                <p>Instance C and Instance D fail to terminate because at least one of the
 *                     specified instances in <code>us-east-1b</code> (Instance C) is enabled for
 *                     termination protection.</p>
 *             </li>
 *          </ul>
 *          <p>Terminated instances remain visible after termination (for approximately one
 *             hour).</p>
 *          <p>By default, Amazon EC2 deletes all EBS volumes that were attached when the instance
 *             launched. Volumes attached after instance launch continue running.</p>
 *          <p>You can stop, start, and terminate EBS-backed instances. You can only terminate
 *             instance store-backed instances. What happens to an instance differs if you stop it or
 *             terminate it. For example, when you stop an instance, the root device and any other
 *             devices attached to the instance persist. When you terminate an instance, any attached
 *             EBS volumes with the <code>DeleteOnTermination</code> block device mapping parameter set
 *             to <code>true</code> are automatically deleted. For more information about the
 *             differences between stopping and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
 *             in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesShuttingDown.html">Troubleshooting terminating your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, TerminateInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, TerminateInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // TerminateInstancesRequest
 *   InstanceIds: [ // InstanceIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new TerminateInstancesCommand(input);
 * const response = await client.send(command);
 * // { // TerminateInstancesResult
 * //   TerminatingInstances: [ // InstanceStateChangeList
 * //     { // InstanceStateChange
 * //       InstanceId: "STRING_VALUE",
 * //       CurrentState: { // InstanceState
 * //         Code: Number("int"),
 * //         Name: "pending" || "running" || "shutting-down" || "terminated" || "stopping" || "stopped",
 * //       },
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
 * @param TerminateInstancesCommandInput - {@link TerminateInstancesCommandInput}
 * @returns {@link TerminateInstancesCommandOutput}
 * @see {@link TerminateInstancesCommandInput} for command's `input` shape.
 * @see {@link TerminateInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To terminate an EC2 instance
 * ```javascript
 * // This example terminates the specified EC2 instance.
 * const input = {
 *   "InstanceIds": [
 *     "i-1234567890abcdef0"
 *   ]
 * };
 * const command = new TerminateInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TerminatingInstances": [
 *     {
 *       "CurrentState": {
 *         "Code": 32,
 *         "Name": "shutting-down"
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
 * // example id: to-terminate-an-ec2-instance-1529359350660
 * ```
 *
 */
export class TerminateInstancesCommand extends $Command
  .classBuilder<
    TerminateInstancesCommandInput,
    TerminateInstancesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "TerminateInstances", {})
  .n("EC2Client", "TerminateInstancesCommand")
  .f(void 0, void 0)
  .ser(se_TerminateInstancesCommand)
  .de(de_TerminateInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateInstancesRequest;
      output: TerminateInstancesResult;
    };
    sdk: {
      input: TerminateInstancesCommandInput;
      output: TerminateInstancesCommandOutput;
    };
  };
}
