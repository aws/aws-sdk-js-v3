// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssessmentReportRequest, DeleteAssessmentReportResponse } from "../models/models_0";
import { DeleteAssessmentReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an assessment report in Audit Manager.
 *
 * When you run the `DeleteAssessmentReport` operation, Audit Manager attempts to delete the following data:
 *
 * 1. The specified assessment report that’s stored in your S3 bucket
 * 2. The associated metadata that’s stored in Audit Manager
 *
 * If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the `DeleteAssessmentReport` operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself.
 *
 * This scenario happens when Audit Manager receives a `403 (Forbidden)` or `404 (Not Found)` error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see [Assessment report destination permissions](https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination) in the *Audit Manager User Guide*. For information about the issues that could cause a `403 (Forbidden)` or `404 (Not Found`) error from Amazon S3, see [List of Error Codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList) in the *Amazon Simple Storage Service API Reference*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentReportCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentReportCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
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
 *
 * Your account isn't registered with Audit Manager. Check the delegated administrator setup on the Audit Manager settings page, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that's specified in the request can't be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AuditManagerServiceException}
 *
 * Base exception class for all service exceptions from AuditManager service.
 *
 * @public
 */
export class DeleteAssessmentReportCommand extends command<DeleteAssessmentReportCommandInput, DeleteAssessmentReportCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAssessmentReport",
  DeleteAssessmentReport$
) {
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
