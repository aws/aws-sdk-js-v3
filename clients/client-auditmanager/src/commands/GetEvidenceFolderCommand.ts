// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEvidenceFolderRequest, GetEvidenceFolderResponse } from "../models/models_0";
import { GetEvidenceFolder } from "../schemas/schemas_15_Assessment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceFolderCommand}.
 */
export interface GetEvidenceFolderCommandInput extends GetEvidenceFolderRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceFolderCommand}.
 */
export interface GetEvidenceFolderCommandOutput extends GetEvidenceFolderResponse, __MetadataBearer {}

/**
 * <p> Gets an evidence folder from a specified assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceFolderRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   evidenceFolderId: "STRING_VALUE", // required
 * };
 * const command = new GetEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceFolderResponse
 * //   evidenceFolder: { // AssessmentEvidenceFolder
 * //     name: "STRING_VALUE",
 * //     date: new Date("TIMESTAMP"),
 * //     assessmentId: "STRING_VALUE",
 * //     controlSetId: "STRING_VALUE",
 * //     controlId: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     dataSource: "STRING_VALUE",
 * //     author: "STRING_VALUE",
 * //     totalEvidence: Number("int"),
 * //     assessmentReportSelectionCount: Number("int"),
 * //     controlName: "STRING_VALUE",
 * //     evidenceResourcesIncludedCount: Number("int"),
 * //     evidenceByTypeConfigurationDataCount: Number("int"),
 * //     evidenceByTypeManualCount: Number("int"),
 * //     evidenceByTypeComplianceCheckCount: Number("int"),
 * //     evidenceByTypeComplianceCheckIssuesCount: Number("int"),
 * //     evidenceByTypeUserActivityCount: Number("int"),
 * //     evidenceAwsServiceSourceCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEvidenceFolderCommandInput - {@link GetEvidenceFolderCommandInput}
 * @returns {@link GetEvidenceFolderCommandOutput}
 * @see {@link GetEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFolderCommandOutput} for command's `response` shape.
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
export class GetEvidenceFolderCommand extends $Command
  .classBuilder<
    GetEvidenceFolderCommandInput,
    GetEvidenceFolderCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "GetEvidenceFolder", {})
  .n("AuditManagerClient", "GetEvidenceFolderCommand")
  .sc(GetEvidenceFolder)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEvidenceFolderRequest;
      output: GetEvidenceFolderResponse;
    };
    sdk: {
      input: GetEvidenceFolderCommandInput;
      output: GetEvidenceFolderCommandOutput;
    };
  };
}
