// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAssessmentReportRequest, DeleteAssessmentReportResponse } from "../models/models_0";
import { de_DeleteAssessmentReportCommand, se_DeleteAssessmentReportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAssessmentReportCommand}.
 */
export interface DeleteAssessmentReportCommandInput extends DeleteAssessmentReportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssessmentReportCommand}.
 */
export interface DeleteAssessmentReportCommandOutput extends DeleteAssessmentReportResponse, __MetadataBearer {}

/**
 * <p>Deletes an assessment report in Audit Manager. </p>
 *          <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager
 *          attempts to delete the following data:</p>
 *          <ol>
 *             <li>
 *                <p>The specified assessment report that’s stored in your S3 bucket</p>
 *             </li>
 *             <li>
 *                <p>The associated metadata that’s stored in Audit Manager</p>
 *             </li>
 *          </ol>
 *          <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report
 *          isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t
 *          fail. Instead, it proceeds to delete the associated metadata only. You must then delete the
 *          assessment report from the S3 bucket yourself. </p>
 *          <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or
 *             <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that
 *          your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that
 *          you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403
 *             (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API
 *             Reference</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentReportCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentReportCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // DeleteAssessmentReportRequest
 *   assessmentId: "STRING_VALUE", // required
 *   assessmentReportId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssessmentReportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssessmentReportCommandInput - {@link DeleteAssessmentReportCommandInput}
 * @returns {@link DeleteAssessmentReportCommandOutput}
 * @see {@link DeleteAssessmentReportCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentReportCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource that's specified in the request can't be found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 *
 * @public
 */
export class DeleteAssessmentReportCommand extends $Command
  .classBuilder<
    DeleteAssessmentReportCommandInput,
    DeleteAssessmentReportCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "DeleteAssessmentReport", {})
  .n("AuditManagerClient", "DeleteAssessmentReportCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAssessmentReportCommand)
  .de(de_DeleteAssessmentReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssessmentReportRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssessmentReportCommandInput;
      output: DeleteAssessmentReportCommandOutput;
    };
  };
}
