// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartInstancesRequest, StartInstancesResult } from "../models/models_7";
import { de_StartInstancesCommand, se_StartInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartInstancesCommand}.
 */
export interface StartInstancesCommandInput extends StartInstancesRequest {}
/**
 * @public
 *
 * The output of {@link StartInstancesCommand}.
 */
export interface StartInstancesCommandOutput extends StartInstancesResult, __MetadataBearer {}

/**
 * <p>Starts an Amazon EBS-backed instance that you've previously stopped.</p>
 *          <p>Instances that use Amazon EBS volumes as their root devices can be quickly stopped and
 *             started. When an instance is stopped, the compute resources are released and you are not
 *             billed for instance usage. However, your root partition Amazon EBS volume remains and
 *             continues to persist your data, and you are charged for Amazon EBS volume usage. You can
 *             restart your instance at any time. Every time you start your instance, Amazon EC2
 *             charges a one-minute minimum for instance usage, and thereafter charges per second for
 *             instance usage.</p>
 *          <p>Before stopping an instance, make sure it is in a state from which it can be
 *             restarted. Stopping an instance does not preserve data stored in RAM.</p>
 *          <p>Performing this operation on an instance that uses an instance store as its root
 *             device returns an error.</p>
 *          <p>If you attempt to start a T3 instance with <code>host</code> tenancy and the
 *                 <code>unlimited</code> CPU credit option, the request fails. The
 *                 <code>unlimited</code> CPU credit option is not supported on Dedicated Hosts. Before
 *             you start the instance, either change its CPU credit option to <code>standard</code>, or
 *             change its tenancy to <code>default</code> or <code>dedicated</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stop and start Amazon EC2
 *                 instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // StartInstancesRequest
 *   InstanceIds: [ // InstanceIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   AdditionalInfo: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new StartInstancesCommand(input);
 * const response = await client.send(command);
 * // { // StartInstancesResult
 * //   StartingInstances: [ // InstanceStateChangeList
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
 * @param StartInstancesCommandInput - {@link StartInstancesCommandInput}
 * @returns {@link StartInstancesCommandOutput}
 * @see {@link StartInstancesCommandInput} for command's `input` shape.
 * @see {@link StartInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To start a stopped EC2 instance
 * ```javascript
 * // This example starts the specified EC2 instance.
 * const input = {
 *   "InstanceIds": [
 *     "i-1234567890abcdef0"
 *   ]
 * };
 * const command = new StartInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "StartingInstances": [
 *     {
 *       "CurrentState": {
 *         "Code": 0,
 *         "Name": "pending"
 *       },
 *       "InstanceId": "i-1234567890abcdef0",
 *       "PreviousState": {
 *         "Code": 80,
 *         "Name": "stopped"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-start-a-stopped-ec2-instance-1529358792730
 * ```
 *
 */
export class StartInstancesCommand extends $Command
  .classBuilder<
    StartInstancesCommandInput,
    StartInstancesCommandOutput,
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
  .s("AmazonEC2", "StartInstances", {})
  .n("EC2Client", "StartInstancesCommand")
  .f(void 0, void 0)
  .ser(se_StartInstancesCommand)
  .de(de_StartInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartInstancesRequest;
      output: StartInstancesResult;
    };
    sdk: {
      input: StartInstancesCommandInput;
      output: StartInstancesCommandOutput;
    };
  };
}
