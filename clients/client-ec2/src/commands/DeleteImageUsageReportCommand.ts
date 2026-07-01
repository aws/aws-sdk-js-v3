// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteImageUsageReportRequest, DeleteImageUsageReportResult } from "../models/models_2";
import { DeleteImageUsageReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/your-ec2-ami-usage.html">View your AMI usage</a> in the
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteImageUsageReportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteImageUsageReportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
export class DeleteImageUsageReportCommand extends command<DeleteImageUsageReportCommandInput, DeleteImageUsageReportCommandOutput>(
  _ep0,
  _mw0,
  "DeleteImageUsageReport",
  DeleteImageUsageReport$
) {
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
