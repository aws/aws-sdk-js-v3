// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateAssessmentReportEvidenceFolderRequest,
  DisassociateAssessmentReportEvidenceFolderResponse,
} from "../models/models_0";
import { DisassociateAssessmentReportEvidenceFolder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAssessmentReportEvidenceFolderCommand}.
 */
export interface DisassociateAssessmentReportEvidenceFolderCommandInput extends DisassociateAssessmentReportEvidenceFolderRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAssessmentReportEvidenceFolderCommand}.
 */
export interface DisassociateAssessmentReportEvidenceFolderCommandOutput extends DisassociateAssessmentReportEvidenceFolderResponse, __MetadataBearer {}

/**
 * <p> Disassociates an evidence folder from the specified assessment report in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DisassociateAssessmentReportEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DisassociateAssessmentReportEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // DisassociateAssessmentReportEvidenceFolderRequest
 *   assessmentId: "STRING_VALUE", // required
 *   evidenceFolderId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateAssessmentReportEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAssessmentReportEvidenceFolderCommandInput - {@link DisassociateAssessmentReportEvidenceFolderCommandInput}
 * @returns {@link DisassociateAssessmentReportEvidenceFolderCommandOutput}
 * @see {@link DisassociateAssessmentReportEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link DisassociateAssessmentReportEvidenceFolderCommandOutput} for command's `response` shape.
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
export class DisassociateAssessmentReportEvidenceFolderCommand extends $Command
  .classBuilder<
    DisassociateAssessmentReportEvidenceFolderCommandInput,
    DisassociateAssessmentReportEvidenceFolderCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "DisassociateAssessmentReportEvidenceFolder", {})
  .n("AuditManagerClient", "DisassociateAssessmentReportEvidenceFolderCommand")
  .sc(DisassociateAssessmentReportEvidenceFolder$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAssessmentReportEvidenceFolderRequest;
      output: {};
    };
    sdk: {
      input: DisassociateAssessmentReportEvidenceFolderCommandInput;
      output: DisassociateAssessmentReportEvidenceFolderCommandOutput;
    };
  };
}
