// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { MonitorInstancesRequest, MonitorInstancesResult } from "../models/models_8";
import { de_MonitorInstancesCommand, se_MonitorInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MonitorInstancesCommand}.
 */
export interface MonitorInstancesCommandInput extends MonitorInstancesRequest {}
/**
 * @public
 *
 * The output of {@link MonitorInstancesCommand}.
 */
export interface MonitorInstancesCommandOutput extends MonitorInstancesResult, __MetadataBearer {}

/**
 * <p>Enables detailed monitoring for a running instance. Otherwise, basic monitoring is
 *             enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitor your instances using
 *                 CloudWatch</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>To disable detailed monitoring, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnmonitorInstances.html">UnmonitorInstances</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, MonitorInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, MonitorInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // MonitorInstancesRequest
 *   InstanceIds: [ // InstanceIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new MonitorInstancesCommand(input);
 * const response = await client.send(command);
 * // { // MonitorInstancesResult
 * //   InstanceMonitorings: [ // InstanceMonitoringList
 * //     { // InstanceMonitoring
 * //       InstanceId: "STRING_VALUE",
 * //       Monitoring: { // Monitoring
 * //         State: "disabled" || "disabling" || "enabled" || "pending",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param MonitorInstancesCommandInput - {@link MonitorInstancesCommandInput}
 * @returns {@link MonitorInstancesCommandOutput}
 * @see {@link MonitorInstancesCommandInput} for command's `input` shape.
 * @see {@link MonitorInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class MonitorInstancesCommand extends $Command
  .classBuilder<
    MonitorInstancesCommandInput,
    MonitorInstancesCommandOutput,
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
  .s("AmazonEC2", "MonitorInstances", {})
  .n("EC2Client", "MonitorInstancesCommand")
  .f(void 0, void 0)
  .ser(se_MonitorInstancesCommand)
  .de(de_MonitorInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MonitorInstancesRequest;
      output: MonitorInstancesResult;
    };
    sdk: {
      input: MonitorInstancesCommandInput;
      output: MonitorInstancesCommandOutput;
    };
  };
}
