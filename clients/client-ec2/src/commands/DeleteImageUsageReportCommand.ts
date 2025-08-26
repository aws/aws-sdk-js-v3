// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteImageUsageReportRequest, DeleteImageUsageReportResult } from "../models/models_3";
import { de_DeleteImageUsageReportCommand, se_DeleteImageUsageReportCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteImageUsageReportCommand}.
 */
export interface DeleteImageUsageReportCommandInput extends DeleteImageUsageReportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImageUsageReportCommand}.
 */
export interface DeleteImageUsageReportCommandOutput extends DeleteImageUsageReportResult, __MetadataBearer {}

/**
 * <p>Deletes the specified image usage report.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-ami-usage.html">View your AMI usage</a> in the
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteImageUsageReportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteImageUsageReportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteImageUsageReportRequest
 *   ReportId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteImageUsageReportCommand(input);
 * const response = await client.send(command);
 * // { // DeleteImageUsageReportResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteImageUsageReportCommandInput - {@link DeleteImageUsageReportCommandInput}
 * @returns {@link DeleteImageUsageReportCommandOutput}
 * @see {@link DeleteImageUsageReportCommandInput} for command's `input` shape.
 * @see {@link DeleteImageUsageReportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteImageUsageReportCommand extends $Command
  .classBuilder<
    DeleteImageUsageReportCommandInput,
    DeleteImageUsageReportCommandOutput,
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
  .s("AmazonEC2", "DeleteImageUsageReport", {})
  .n("EC2Client", "DeleteImageUsageReportCommand")
  .f(void 0, void 0)
  .ser(se_DeleteImageUsageReportCommand)
  .de(de_DeleteImageUsageReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImageUsageReportRequest;
      output: DeleteImageUsageReportResult;
    };
    sdk: {
      input: DeleteImageUsageReportCommandInput;
      output: DeleteImageUsageReportCommandOutput;
    };
  };
}
