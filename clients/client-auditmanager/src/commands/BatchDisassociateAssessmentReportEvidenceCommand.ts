// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchDisassociateAssessmentReportEvidenceRequest,
  BatchDisassociateAssessmentReportEvidenceResponse,
} from "../models/models_0";
import { BatchDisassociateAssessmentReportEvidence } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateAssessmentReportEvidenceCommand}.
 */
export interface BatchDisassociateAssessmentReportEvidenceCommandInput
  extends BatchDisassociateAssessmentReportEvidenceRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateAssessmentReportEvidenceCommand}.
 */
export interface BatchDisassociateAssessmentReportEvidenceCommandOutput
  extends BatchDisassociateAssessmentReportEvidenceResponse,
    __MetadataBearer {}

/**
 * <p> Disassociates a list of evidence from an assessment report in Audit Manager.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchDisassociateAssessmentReportEvidenceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchDisassociateAssessmentReportEvidenceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // BatchDisassociateAssessmentReportEvidenceRequest
 *   assessmentId: "STRING_VALUE", // required
 *   evidenceFolderId: "STRING_VALUE", // required
 *   evidenceIds: [ // EvidenceIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDisassociateAssessmentReportEvidenceCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateAssessmentReportEvidenceResponse
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
 * @param BatchDisassociateAssessmentReportEvidenceCommandInput - {@link BatchDisassociateAssessmentReportEvidenceCommandInput}
 * @returns {@link BatchDisassociateAssessmentReportEvidenceCommandOutput}
 * @see {@link BatchDisassociateAssessmentReportEvidenceCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateAssessmentReportEvidenceCommandOutput} for command's `response` shape.
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
export class BatchDisassociateAssessmentReportEvidenceCommand extends $Command
  .classBuilder<
    BatchDisassociateAssessmentReportEvidenceCommandInput,
    BatchDisassociateAssessmentReportEvidenceCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "BatchDisassociateAssessmentReportEvidence", {})
  .n("AuditManagerClient", "BatchDisassociateAssessmentReportEvidenceCommand")
  .sc(BatchDisassociateAssessmentReportEvidence)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateAssessmentReportEvidenceRequest;
      output: BatchDisassociateAssessmentReportEvidenceResponse;
    };
    sdk: {
      input: BatchDisassociateAssessmentReportEvidenceCommandInput;
      output: BatchDisassociateAssessmentReportEvidenceCommandOutput;
    };
  };
}
