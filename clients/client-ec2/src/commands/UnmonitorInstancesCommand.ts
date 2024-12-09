// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UnmonitorInstancesRequest, UnmonitorInstancesResult } from "../models/models_8";
import { de_UnmonitorInstancesCommand, se_UnmonitorInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnmonitorInstancesCommand}.
 */
export interface UnmonitorInstancesCommandInput extends UnmonitorInstancesRequest {}
/**
 * @public
 *
 * The output of {@link UnmonitorInstancesCommand}.
 */
export interface UnmonitorInstancesCommandOutput extends UnmonitorInstancesResult, __MetadataBearer {}

/**
 * <p>Disables detailed monitoring for a running instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring
 *                 your instances and volumes</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnmonitorInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnmonitorInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // UnmonitorInstancesRequest
 *   InstanceIds: [ // InstanceIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new UnmonitorInstancesCommand(input);
 * const response = await client.send(command);
 * // { // UnmonitorInstancesResult
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
 * @param UnmonitorInstancesCommandInput - {@link UnmonitorInstancesCommandInput}
 * @returns {@link UnmonitorInstancesCommandOutput}
 * @see {@link UnmonitorInstancesCommandInput} for command's `input` shape.
 * @see {@link UnmonitorInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class UnmonitorInstancesCommand extends $Command
  .classBuilder<
    UnmonitorInstancesCommandInput,
    UnmonitorInstancesCommandOutput,
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
  .s("AmazonEC2", "UnmonitorInstances", {})
  .n("EC2Client", "UnmonitorInstancesCommand")
  .f(void 0, void 0)
  .ser(se_UnmonitorInstancesCommand)
  .de(de_UnmonitorInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnmonitorInstancesRequest;
      output: UnmonitorInstancesResult;
    };
    sdk: {
      input: UnmonitorInstancesCommandInput;
      output: UnmonitorInstancesCommandOutput;
    };
  };
}
