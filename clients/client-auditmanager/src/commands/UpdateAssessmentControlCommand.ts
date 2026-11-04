// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAssessmentControlRequest, UpdateAssessmentControlResponse } from "../models/models_0";
import { UpdateAssessmentControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a control within an assessment in Audit Manager.
 *
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
export class UpdateAssessmentControlCommand extends command<UpdateAssessmentControlCommandInput, UpdateAssessmentControlCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAssessmentControl",
  UpdateAssessmentControl$
) {
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
