// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateAssessmentControlSetStatusRequest,
  UpdateAssessmentControlSetStatusResponse,
} from "../models/models_0";
import { UpdateAssessmentControlSetStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssessmentControlSetStatusCommand}.
 */
export interface UpdateAssessmentControlSetStatusCommandInput extends UpdateAssessmentControlSetStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssessmentControlSetStatusCommand}.
 */
export interface UpdateAssessmentControlSetStatusCommandOutput extends UpdateAssessmentControlSetStatusResponse, __MetadataBearer {}

/**
 * <p> Updates the status of a control set in an Audit Manager assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentControlSetStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentControlSetStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // UpdateAssessmentControlSetStatusRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   status: "ACTIVE" || "UNDER_REVIEW" || "REVIEWED", // required
 *   comment: "STRING_VALUE", // required
 * };
 * const command = new UpdateAssessmentControlSetStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssessmentControlSetStatusResponse
 * //   controlSet: { // AssessmentControlSet
 * //     id: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     status: "ACTIVE" || "UNDER_REVIEW" || "REVIEWED",
 * //     roles: [ // Roles
 * //       { // Role
 * //         roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     controls: [ // AssessmentControls
 * //       { // AssessmentControl
 * //         id: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         status: "UNDER_REVIEW" || "REVIEWED" || "INACTIVE",
 * //         response: "MANUAL" || "AUTOMATE" || "DEFER" || "IGNORE",
 * //         comments: [ // ControlComments
 * //           { // ControlComment
 * //             authorName: "STRING_VALUE",
 * //             commentBody: "STRING_VALUE",
 * //             postedDate: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //         evidenceSources: [ // EvidenceSources
 * //           "STRING_VALUE",
 * //         ],
 * //         evidenceCount: Number("int"),
 * //         assessmentReportEvidenceCount: Number("int"),
 * //       },
 * //     ],
 * //     delegations: [ // Delegations
 * //       { // Delegation
 * //         id: "STRING_VALUE",
 * //         assessmentName: "STRING_VALUE",
 * //         assessmentId: "STRING_VALUE",
 * //         status: "IN_PROGRESS" || "UNDER_REVIEW" || "COMPLETE",
 * //         roleArn: "STRING_VALUE",
 * //         roleType: "PROCESS_OWNER" || "RESOURCE_OWNER",
 * //         creationTime: new Date("TIMESTAMP"),
 * //         lastUpdated: new Date("TIMESTAMP"),
 * //         controlSetId: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //         createdBy: "STRING_VALUE",
 * //       },
 * //     ],
 * //     systemEvidenceCount: Number("int"),
 * //     manualEvidenceCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssessmentControlSetStatusCommandInput - {@link UpdateAssessmentControlSetStatusCommandInput}
 * @returns {@link UpdateAssessmentControlSetStatusCommandOutput}
 * @see {@link UpdateAssessmentControlSetStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentControlSetStatusCommandOutput} for command's `response` shape.
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
export class UpdateAssessmentControlSetStatusCommand extends $Command
  .classBuilder<
    UpdateAssessmentControlSetStatusCommandInput,
    UpdateAssessmentControlSetStatusCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "UpdateAssessmentControlSetStatus", {})
  .n("AuditManagerClient", "UpdateAssessmentControlSetStatusCommand")
  .sc(UpdateAssessmentControlSetStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssessmentControlSetStatusRequest;
      output: UpdateAssessmentControlSetStatusResponse;
    };
    sdk: {
      input: UpdateAssessmentControlSetStatusCommandInput;
      output: UpdateAssessmentControlSetStatusCommandOutput;
    };
  };
}
