// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchAssociateAssessmentReportEvidenceRequest,
  BatchAssociateAssessmentReportEvidenceResponse,
} from "../models/models_0";
import {
  de_BatchAssociateAssessmentReportEvidenceCommand,
  se_BatchAssociateAssessmentReportEvidenceCommand,
} from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "BatchAssociateAssessmentReportEvidence", {})
  .n("AuditManagerClient", "BatchAssociateAssessmentReportEvidenceCommand")
  .f(void 0, void 0)
  .ser(se_BatchAssociateAssessmentReportEvidenceCommand)
  .de(de_BatchAssociateAssessmentReportEvidenceCommand)
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
