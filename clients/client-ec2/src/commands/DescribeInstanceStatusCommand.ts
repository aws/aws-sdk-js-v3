// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceStatusRequest, DescribeInstanceStatusResult } from "../models/models_4";
import { de_DescribeInstanceStatusCommand, se_DescribeInstanceStatusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceStatusCommand}.
 */
export interface DescribeInstanceStatusCommandInput extends DescribeInstanceStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceStatusCommand}.
 */
export interface DescribeInstanceStatusCommandOutput extends DescribeInstanceStatusResult, __MetadataBearer {}

/**
 * <p>Describes the status of the specified instances or all of your instances. By default,
 *             only running instances are described, unless you specifically indicate to return the
 *             status of all instances.</p>
 *          <p>Instance status includes the following components:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Status checks</b> - Amazon EC2 performs status
 *                     checks on running EC2 instances to identify hardware and software issues. For
 *                     more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html">Status checks for your instances</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstances.html">Troubleshoot
 *                         instances with failed status checks</a> in the <i>Amazon EC2 User
 *                         Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Scheduled events</b> - Amazon EC2 can schedule
 *                     events (such as reboot, stop, or terminate) for your instances related to
 *                     hardware issues, software updates, or system maintenance. For more information,
 *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-instances-status-check_sched.html">Scheduled events for your instances</a> in the <i>Amazon EC2 User
 *                         Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Instance state</b> - You can manage your instances
 *                     from the moment you launch them through their termination. For more information,
 *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance
 *                         lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>The Amazon EC2 API follows an eventual consistency model. This means that the result of an
 *             API command you run that creates or modifies resources might not be immediately
 *             available to all subsequent commands you run. For guidance on how to manage eventual
 *             consistency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/eventual-consistency.html">Eventual consistency in the
 *                 Amazon EC2 API</a> in the <i>Amazon EC2 Developer
 *             Guide</i>.</p>
 *          <note>
 *             <p>The order of the elements in the response, including those within nested
 *                 structures, might vary. Applications should not assume the elements appear in a
 *                 particular order.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceStatusRequest
 *   InstanceIds: [ // InstanceIdStringList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   IncludeAllInstances: true || false,
 * };
 * const command = new DescribeInstanceStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceStatusResult
 * //   InstanceStatuses: [ // InstanceStatusList
 * //     { // InstanceStatus
 * //       AvailabilityZone: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       Operator: { // OperatorResponse
 * //         Managed: true || false,
 * //         Principal: "STRING_VALUE",
 * //       },
 * //       Events: [ // InstanceStatusEventList
 * //         { // InstanceStatusEvent
 * //           InstanceEventId: "STRING_VALUE",
 * //           Code: "instance-reboot" || "system-reboot" || "system-maintenance" || "instance-retirement" || "instance-stop",
 * //           Description: "STRING_VALUE",
 * //           NotAfter: new Date("TIMESTAMP"),
 * //           NotBefore: new Date("TIMESTAMP"),
 * //           NotBeforeDeadline: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceState: { // InstanceState
 * //         Code: Number("int"),
 * //         Name: "pending" || "running" || "shutting-down" || "terminated" || "stopping" || "stopped",
 * //       },
 * //       InstanceStatus: { // InstanceStatusSummary
 * //         Details: [ // InstanceStatusDetailsList
 * //           { // InstanceStatusDetails
 * //             ImpairedSince: new Date("TIMESTAMP"),
 * //             Name: "reachability",
 * //             Status: "passed" || "failed" || "insufficient-data" || "initializing",
 * //           },
 * //         ],
 * //         Status: "ok" || "impaired" || "insufficient-data" || "not-applicable" || "initializing",
 * //       },
 * //       SystemStatus: {
 * //         Details: [
 * //           {
 * //             ImpairedSince: new Date("TIMESTAMP"),
 * //             Name: "reachability",
 * //             Status: "passed" || "failed" || "insufficient-data" || "initializing",
 * //           },
 * //         ],
 * //         Status: "ok" || "impaired" || "insufficient-data" || "not-applicable" || "initializing",
 * //       },
 * //       AttachedEbsStatus: { // EbsStatusSummary
 * //         Details: [ // EbsStatusDetailsList
 * //           { // EbsStatusDetails
 * //             ImpairedSince: new Date("TIMESTAMP"),
 * //             Name: "reachability",
 * //             Status: "passed" || "failed" || "insufficient-data" || "initializing",
 * //           },
 * //         ],
 * //         Status: "ok" || "impaired" || "insufficient-data" || "not-applicable" || "initializing",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceStatusCommandInput - {@link DescribeInstanceStatusCommandInput}
 * @returns {@link DescribeInstanceStatusCommandOutput}
 * @see {@link DescribeInstanceStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe the status of an instance
 * ```javascript
 * // This example describes the current status of the specified instance.
 * const input = {
 *   InstanceIds: [
 *     "i-1234567890abcdef0"
 *   ]
 * };
 * const command = new DescribeInstanceStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstanceStatuses: [
 *     {
 *       AvailabilityZone: "us-east-1d",
 *       InstanceId: "i-1234567890abcdef0",
 *       InstanceState: {
 *         Code: 16,
 *         Name: "running"
 *       },
 *       InstanceStatus: {
 *         Details: [
 *           {
 *             Name: "reachability",
 *             Status: "passed"
 *           }
 *         ],
 *         Status: "ok"
 *       },
 *       SystemStatus: {
 *         Details: [
 *           {
 *             Name: "reachability",
 *             Status: "passed"
 *           }
 *         ],
 *         Status: "ok"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeInstanceStatusCommand extends $Command
  .classBuilder<
    DescribeInstanceStatusCommandInput,
    DescribeInstanceStatusCommandOutput,
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
  .s("AmazonEC2", "DescribeInstanceStatus", {})
  .n("EC2Client", "DescribeInstanceStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstanceStatusCommand)
  .de(de_DescribeInstanceStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceStatusRequest;
      output: DescribeInstanceStatusResult;
    };
    sdk: {
      input: DescribeInstanceStatusCommandInput;
      output: DescribeInstanceStatusCommandOutput;
    };
  };
}
