// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  BatchAssociateAssessmentReportEvidenceRequest,
  BatchAssociateAssessmentReportEvidenceResponse,
} from "../models/models_0";
import { BatchAssociateAssessmentReportEvidence$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateAssessmentReportEvidenceCommand}.
 */
export interface BatchAssociateAssessmentReportEvidenceCommandInput
  extends BatchAssociateAssessmentReportEvidenceRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateAssessmentReportEvidenceCommand}.
 */
export interface BatchAssociateAssessmentReportEvidenceCommandOutput
  extends BatchAssociateAssessmentReportEvidenceResponse,
    __MetadataBearer {}

/**
 * <p> Associates a list of evidence to an assessment report in an Audit Manager
 *          assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchAssociateAssessmentReportEvidenceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchAssociateAssessmentReportEvidenceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // BatchAssociateAssessmentReportEvidenceRequest
 *   assessmentId: "STRING_VALUE", // required
 *   evidenceFolderId: "STRING_VALUE", // required
 *   evidenceIds: [ // EvidenceIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchAssociateAssessmentReportEvidenceCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateAssessmentReportEvidenceResponse
 * //   evidenceIds: [ // EvidenceIds
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // AssessmentReportEvidenceErrors
 * //     { // AssessmentReportEvidenceError
 * //       evidenceId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateAssessmentReportEvidenceCommandInput - {@link BatchAssociateAssessmentReportEvidenceCommandInput}
 * @returns {@link BatchAssociateAssessmentReportEvidenceCommandOutput}
 * @see {@link BatchAssociateAssessmentReportEvidenceCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateAssessmentReportEvidenceCommandOutput} for command's `response` shape.
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
export class BatchAssociateAssessmentReportEvidenceCommand extends $Command
  .classBuilder<
    BatchAssociateAssessmentReportEvidenceCommandInput,
    BatchAssociateAssessmentReportEvidenceCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "BatchAssociateAssessmentReportEvidence", {})
  .n("AuditManagerClient", "BatchAssociateAssessmentReportEvidenceCommand")
  .sc(BatchAssociateAssessmentReportEvidence$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateAssessmentReportEvidenceRequest;
      output: BatchAssociateAssessmentReportEvidenceResponse;
    };
    sdk: {
      input: BatchAssociateAssessmentReportEvidenceCommandInput;
      output: BatchAssociateAssessmentReportEvidenceCommandOutput;
    };
  };
}
