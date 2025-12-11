// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelDeclarativePoliciesReportRequest, CancelDeclarativePoliciesReportResult } from "../models/models_0";
import { CancelDeclarativePoliciesReport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelDeclarativePoliciesReportCommand}.
 */
export interface CancelDeclarativePoliciesReportCommandInput extends CancelDeclarativePoliciesReportRequest {}
/**
 * @public
 *
 * The output of {@link CancelDeclarativePoliciesReportCommand}.
 */
export interface CancelDeclarativePoliciesReportCommandOutput
  extends CancelDeclarativePoliciesReportResult,
    __MetadataBearer {}

/**
 * <p>Cancels the generation of an account status report.</p>
 *          <p>You can only cancel a report while it has the <code>running</code> status. Reports
 *             with other statuses (<code>complete</code>, <code>cancelled</code>, or
 *                 <code>error</code>) can't be canceled.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative_status-report.html">Generating the account status report for declarative policies</a> in the
 *                 <i>Amazon Web Services Organizations User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelDeclarativePoliciesReportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelDeclarativePoliciesReportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CancelDeclarativePoliciesReportRequest
 *   DryRun: true || false,
 *   ReportId: "STRING_VALUE", // required
 * };
 * const command = new CancelDeclarativePoliciesReportCommand(input);
 * const response = await client.send(command);
 * // { // CancelDeclarativePoliciesReportResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param CancelDeclarativePoliciesReportCommandInput - {@link CancelDeclarativePoliciesReportCommandInput}
 * @returns {@link CancelDeclarativePoliciesReportCommandOutput}
 * @see {@link CancelDeclarativePoliciesReportCommandInput} for command's `input` shape.
 * @see {@link CancelDeclarativePoliciesReportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CancelDeclarativePoliciesReportCommand extends $Command
  .classBuilder<
    CancelDeclarativePoliciesReportCommandInput,
    CancelDeclarativePoliciesReportCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CancelDeclarativePoliciesReport", {})
  .n("EC2Client", "CancelDeclarativePoliciesReportCommand")
  .sc(CancelDeclarativePoliciesReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelDeclarativePoliciesReportRequest;
      output: CancelDeclarativePoliciesReportResult;
    };
    sdk: {
      input: CancelDeclarativePoliciesReportCommandInput;
      output: CancelDeclarativePoliciesReportCommandOutput;
    };
  };
}
