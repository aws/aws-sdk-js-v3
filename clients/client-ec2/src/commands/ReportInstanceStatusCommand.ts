// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReportInstanceStatusRequest, ReportInstanceStatusRequestFilterSensitiveLog } from "../models/models_8";
import { de_ReportInstanceStatusCommand, se_ReportInstanceStatusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReportInstanceStatusCommand}.
 */
export interface ReportInstanceStatusCommandInput extends ReportInstanceStatusRequest {}
/**
 * @public
 *
 * The output of {@link ReportInstanceStatusCommand}.
 */
export interface ReportInstanceStatusCommandOutput extends __MetadataBearer {}

/**
 * <p>Submits feedback about the status of an instance. The instance must be in the
 *                 <code>running</code> state. If your experience with the instance differs from the
 *             instance status returned by <a>DescribeInstanceStatus</a>, use <a>ReportInstanceStatus</a> to report your experience with the instance. Amazon
 *             EC2 collects this information to improve the accuracy of status checks.</p>
 *          <p>Use of this action does not change the value returned by <a>DescribeInstanceStatus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReportInstanceStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReportInstanceStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReportInstanceStatusRequest
 *   DryRun: true || false,
 *   Instances: [ // InstanceIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   Status: "ok" || "impaired", // required
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   ReasonCodes: [ // ReasonCodesList // required
 *     "instance-stuck-in-state" || "unresponsive" || "not-accepting-credentials" || "password-not-available" || "performance-network" || "performance-instance-store" || "performance-ebs-volume" || "performance-other" || "other",
 *   ],
 *   Description: "STRING_VALUE",
 * };
 * const command = new ReportInstanceStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ReportInstanceStatusCommandInput - {@link ReportInstanceStatusCommandInput}
 * @returns {@link ReportInstanceStatusCommandOutput}
 * @see {@link ReportInstanceStatusCommandInput} for command's `input` shape.
 * @see {@link ReportInstanceStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ReportInstanceStatusCommand extends $Command
  .classBuilder<
    ReportInstanceStatusCommandInput,
    ReportInstanceStatusCommandOutput,
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
  .s("AmazonEC2", "ReportInstanceStatus", {})
  .n("EC2Client", "ReportInstanceStatusCommand")
  .f(ReportInstanceStatusRequestFilterSensitiveLog, void 0)
  .ser(se_ReportInstanceStatusCommand)
  .de(de_ReportInstanceStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReportInstanceStatusRequest;
      output: {};
    };
    sdk: {
      input: ReportInstanceStatusCommandInput;
      output: ReportInstanceStatusCommandOutput;
    };
  };
}
