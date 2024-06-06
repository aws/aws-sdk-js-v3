// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEvidenceFoldersByAssessmentRequest, GetEvidenceFoldersByAssessmentResponse } from "../models/models_0";
import {
  de_GetEvidenceFoldersByAssessmentCommand,
  se_GetEvidenceFoldersByAssessmentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceFoldersByAssessmentCommand}.
 */
export interface GetEvidenceFoldersByAssessmentCommandInput extends GetEvidenceFoldersByAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceFoldersByAssessmentCommand}.
 */
export interface GetEvidenceFoldersByAssessmentCommandOutput
  extends GetEvidenceFoldersByAssessmentResponse,
    __MetadataBearer {}

/**
 * <p> Gets the evidence folders from a specified assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFoldersByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFoldersByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceFoldersByAssessmentRequest
 *   assessmentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetEvidenceFoldersByAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceFoldersByAssessmentResponse
 * //   evidenceFolders: [ // AssessmentEvidenceFolders
 * //     { // AssessmentEvidenceFolder
 * //       name: "STRING_VALUE",
 * //       date: new Date("TIMESTAMP"),
 * //       assessmentId: "STRING_VALUE",
 * //       controlSetId: "STRING_VALUE",
 * //       controlId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       dataSource: "STRING_VALUE",
 * //       author: "STRING_VALUE",
 * //       totalEvidence: Number("int"),
 * //       assessmentReportSelectionCount: Number("int"),
 * //       controlName: "STRING_VALUE",
 * //       evidenceResourcesIncludedCount: Number("int"),
 * //       evidenceByTypeConfigurationDataCount: Number("int"),
 * //       evidenceByTypeManualCount: Number("int"),
 * //       evidenceByTypeComplianceCheckCount: Number("int"),
 * //       evidenceByTypeComplianceCheckIssuesCount: Number("int"),
 * //       evidenceByTypeUserActivityCount: Number("int"),
 * //       evidenceAwsServiceSourceCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEvidenceFoldersByAssessmentCommandInput - {@link GetEvidenceFoldersByAssessmentCommandInput}
 * @returns {@link GetEvidenceFoldersByAssessmentCommandOutput}
 * @see {@link GetEvidenceFoldersByAssessmentCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFoldersByAssessmentCommandOutput} for command's `response` shape.
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
export class GetEvidenceFoldersByAssessmentCommand extends $Command
  .classBuilder<
    GetEvidenceFoldersByAssessmentCommandInput,
    GetEvidenceFoldersByAssessmentCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "GetEvidenceFoldersByAssessment", {})
  .n("AuditManagerClient", "GetEvidenceFoldersByAssessmentCommand")
  .f(void 0, void 0)
  .ser(se_GetEvidenceFoldersByAssessmentCommand)
  .de(de_GetEvidenceFoldersByAssessmentCommand)
  .build() {}
