// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAssessmentControlRequest, UpdateAssessmentControlResponse } from "../models/models_0";
import { UpdateAssessmentControl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssessmentControlCommand}.
 */
export interface UpdateAssessmentControlCommandInput extends UpdateAssessmentControlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssessmentControlCommand}.
 */
export interface UpdateAssessmentControlCommandOutput extends UpdateAssessmentControlResponse, __MetadataBearer {}

/**
 * <p> Updates a control within an assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // UpdateAssessmentControlRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   controlId: "STRING_VALUE", // required
 *   controlStatus: "UNDER_REVIEW" || "REVIEWED" || "INACTIVE",
 *   commentBody: "STRING_VALUE",
 * };
 * const command = new UpdateAssessmentControlCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssessmentControlResponse
 * //   control: { // AssessmentControl
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     status: "UNDER_REVIEW" || "REVIEWED" || "INACTIVE",
 * //     response: "MANUAL" || "AUTOMATE" || "DEFER" || "IGNORE",
 * //     comments: [ // ControlComments
 * //       { // ControlComment
 * //         authorName: "STRING_VALUE",
 * //         commentBody: "STRING_VALUE",
 * //         postedDate: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     evidenceSources: [ // EvidenceSources
 * //       "STRING_VALUE",
 * //     ],
 * //     evidenceCount: Number("int"),
 * //     assessmentReportEvidenceCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssessmentControlCommandInput - {@link UpdateAssessmentControlCommandInput}
 * @returns {@link UpdateAssessmentControlCommandOutput}
 * @see {@link UpdateAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentControlCommandOutput} for command's `response` shape.
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
export class UpdateAssessmentControlCommand extends $Command
  .classBuilder<
    UpdateAssessmentControlCommandInput,
    UpdateAssessmentControlCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "UpdateAssessmentControl", {})
  .n("AuditManagerClient", "UpdateAssessmentControlCommand")
  .sc(UpdateAssessmentControl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssessmentControlRequest;
      output: UpdateAssessmentControlResponse;
    };
    sdk: {
      input: UpdateAssessmentControlCommandInput;
      output: UpdateAssessmentControlCommandOutput;
    };
  };
}
