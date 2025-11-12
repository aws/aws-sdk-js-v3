// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopInstancesRequest, StopInstancesResult } from "../models/models_8";
import { StopInstances } from "../schemas/schemas_0";

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
 * <p>Stops an Amazon EBS-backed instance. You can restart your instance at any time using
 *             the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartInstances.html">StartInstances</a> API. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stop and start Amazon EC2
 *                 instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>When you stop or hibernate an instance, we shut it down. By default, this includes a
 *             graceful operating system (OS) shutdown. To bypass the graceful shutdown, use the
 *                 <code>skipOsShutdown</code> parameter; however, this might risk data
 *             integrity.</p>
 *          <p>You can use the StopInstances operation together with the <code>Hibernate</code>
 *             parameter to hibernate an instance if the instance is <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enabling-hibernation.html">enabled for
 *                 hibernation</a> and meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation
 *                 prerequisites</a>. Stopping an instance doesn't preserve data stored in RAM,
 *             while hibernation does. If hibernation fails, a normal shutdown occurs. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your Amazon EC2
 *                 instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>If your instance appears stuck in the <code>stopping</code> state, there might be an
 *             issue with the underlying host computer. You can use the StopInstances operation
 *             together with the Force parameter to force stop your instance. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshoot
 *                     Amazon EC2 instance stop issues</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 *          <p>Stopping and hibernating an instance differs from rebooting or terminating it. For
 *             example, a stopped or hibernated instance retains its root volume and any data volumes,
 *             unlike terminated instances where these volumes are automatically deleted. For more
 *             information about the differences between stopping, hibernating, rebooting, and
 *             terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Amazon EC2
 *                 instance state changes</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>We don't charge for instance usage or data transfer fees when an instance is stopped.
 *             However, the root volume and any data volumes remain and continue to persist your data,
 *             and you're charged for volume usage. Every time you start your instance, Amazon EC2 charges a one-minute minimum for instance usage, followed by per-second
 *             billing.</p>
 *          <p>You can't stop or hibernate instance store-backed instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StopInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StopInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // StopInstancesRequest
 *   InstanceIds: [ // InstanceIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   Hibernate: true || false,
 *   SkipOsShutdown: true || false,
 *   DryRun: true || false,
 *   Force: true || false,
 * };
 * const command = new StopInstancesCommand(input);
 * const response = await client.send(command);
 * // { // StopInstancesResult
 * //   StoppingInstances: [ // InstanceStateChangeList
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
 * @param StopInstancesCommandInput - {@link StopInstancesCommandInput}
 * @returns {@link StopInstancesCommandOutput}
 * @see {@link StopInstancesCommandInput} for command's `input` shape.
 * @see {@link StopInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To stop a running EC2 instance
 * ```javascript
 * // This example stops the specified EC2 instance.
 * const input = {
 *   InstanceIds: [
 *     "i-1234567890abcdef0"
 *   ]
 * };
 * const command = new StopInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   StoppingInstances: [
 *     {
 *       CurrentState: {
 *         Code: 64,
 *         Name: "stopping"
 *       },
 *       InstanceId: "i-1234567890abcdef0",
 *       PreviousState: {
 *         Code: 16,
 *         Name: "running"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StopInstancesCommand extends $Command
  .classBuilder<
    StopInstancesCommandInput,
    StopInstancesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "StopInstances", {})
  .n("EC2Client", "StopInstancesCommand")
  .sc(StopInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopInstancesRequest;
      output: StopInstancesResult;
    };
    sdk: {
      input: StopInstancesCommandInput;
      output: StopInstancesCommandOutput;
    };
  };
}
