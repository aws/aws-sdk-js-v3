// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetEvidenceFoldersByAssessmentControlRequest,
  GetEvidenceFoldersByAssessmentControlResponse,
} from "../models/models_0";
import { GetEvidenceFoldersByAssessmentControl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceFoldersByAssessmentControlCommand}.
 */
export interface GetEvidenceFoldersByAssessmentControlCommandInput
  extends GetEvidenceFoldersByAssessmentControlRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceFoldersByAssessmentControlCommand}.
 */
export interface GetEvidenceFoldersByAssessmentControlCommandOutput
  extends GetEvidenceFoldersByAssessmentControlResponse,
    __MetadataBearer {}

/**
 * <p> Gets a list of evidence folders that are associated with a specified control in an
 *             Audit Manager assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFoldersByAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFoldersByAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceFoldersByAssessmentControlRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   controlId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetEvidenceFoldersByAssessmentControlCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceFoldersByAssessmentControlResponse
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
 * @param GetEvidenceFoldersByAssessmentControlCommandInput - {@link GetEvidenceFoldersByAssessmentControlCommandInput}
 * @returns {@link GetEvidenceFoldersByAssessmentControlCommandOutput}
 * @see {@link GetEvidenceFoldersByAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFoldersByAssessmentControlCommandOutput} for command's `response` shape.
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
export class GetEvidenceFoldersByAssessmentControlCommand extends $Command
  .classBuilder<
    GetEvidenceFoldersByAssessmentControlCommandInput,
    GetEvidenceFoldersByAssessmentControlCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "GetEvidenceFoldersByAssessmentControl", {})
  .n("AuditManagerClient", "GetEvidenceFoldersByAssessmentControlCommand")
  .sc(GetEvidenceFoldersByAssessmentControl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEvidenceFoldersByAssessmentControlRequest;
      output: GetEvidenceFoldersByAssessmentControlResponse;
    };
    sdk: {
      input: GetEvidenceFoldersByAssessmentControlCommandInput;
      output: GetEvidenceFoldersByAssessmentControlCommandOutput;
    };
  };
}
