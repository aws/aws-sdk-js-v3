// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchImportEvidenceToAssessmentControlRequest,
  BatchImportEvidenceToAssessmentControlResponse,
} from "../models/models_0";
import { BatchImportEvidenceToAssessmentControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchImportEvidenceToAssessmentControlCommand}.
 */
export interface BatchImportEvidenceToAssessmentControlCommandInput extends BatchImportEvidenceToAssessmentControlRequest {}
/**
 * @public
 *
 * The output of {@link BatchImportEvidenceToAssessmentControlCommand}.
 */
export interface BatchImportEvidenceToAssessmentControlCommandOutput extends BatchImportEvidenceToAssessmentControlResponse, __MetadataBearer {}

/**
 * Adds one or more pieces of evidence to a control in an Audit Manager assessment.
 *
 * You can import manual evidence from any S3 bucket by specifying the S3 URI of the object. You can also upload a file from your browser, or enter plain text in response to a risk assessment question.
 *
 * The following restrictions apply to this action:
 *
 * - `manualEvidence` can be only one of the following: `evidenceFileName`, `s3ResourcePath`, or `textResponse`
 * - Maximum size of an individual evidence file: 100 MB
 * - Number of daily manual evidence uploads per control: 100
 * - Supported file formats: See [Supported file types for manual evidence](https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files) in the *Audit Manager User Guide*
 *
 * For more information about Audit Manager service restrictions, see [Quotas and restrictions for Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchImportEvidenceToAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchImportEvidenceToAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // BatchImportEvidenceToAssessmentControlRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   controlId: "STRING_VALUE", // required
 *   manualEvidence: [ // ManualEvidenceList // required
 *     { // ManualEvidence
 *       s3ResourcePath: "STRING_VALUE",
 *       textResponse: "STRING_VALUE",
 *       evidenceFileName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchImportEvidenceToAssessmentControlCommand(input);
 * const response = await client.send(command);
 * // { // BatchImportEvidenceToAssessmentControlResponse
 * //   errors: [ // BatchImportEvidenceToAssessmentControlErrors
 * //     { // BatchImportEvidenceToAssessmentControlError
 * //       manualEvidence: { // ManualEvidence
 * //         s3ResourcePath: "STRING_VALUE",
 * //         textResponse: "STRING_VALUE",
 * //         evidenceFileName: "STRING_VALUE",
 * //       },
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchImportEvidenceToAssessmentControlCommandInput - {@link BatchImportEvidenceToAssessmentControlCommandInput}
 * @returns {@link BatchImportEvidenceToAssessmentControlCommandOutput}
 * @see {@link BatchImportEvidenceToAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link BatchImportEvidenceToAssessmentControlCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
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
export class BatchImportEvidenceToAssessmentControlCommand extends command<BatchImportEvidenceToAssessmentControlCommandInput, BatchImportEvidenceToAssessmentControlCommandOutput>(
  _ep0,
  _mw0,
  "BatchImportEvidenceToAssessmentControl",
  BatchImportEvidenceToAssessmentControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchImportEvidenceToAssessmentControlRequest;
      output: BatchImportEvidenceToAssessmentControlResponse;
    };
    sdk: {
      input: BatchImportEvidenceToAssessmentControlCommandInput;
      output: BatchImportEvidenceToAssessmentControlCommandOutput;
    };
  };
}
