// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAssessmentReportRequest, CreateAssessmentReportResponse } from "../models/models_0";
import { CreateAssessmentReport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAssessmentReportCommand}.
 */
export interface CreateAssessmentReportCommandInput extends CreateAssessmentReportRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssessmentReportCommand}.
 */
export interface CreateAssessmentReportCommandOutput extends CreateAssessmentReportResponse, __MetadataBearer {}

/**
 * <p> Creates an assessment report for the specified assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, CreateAssessmentReportCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, CreateAssessmentReportCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // CreateAssessmentReportRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   assessmentId: "STRING_VALUE", // required
 *   queryStatement: "STRING_VALUE",
 * };
 * const command = new CreateAssessmentReportCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssessmentReportResponse
 * //   assessmentReport: { // AssessmentReport
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     awsAccountId: "STRING_VALUE",
 * //     assessmentId: "STRING_VALUE",
 * //     assessmentName: "STRING_VALUE",
 * //     author: "STRING_VALUE",
 * //     status: "COMPLETE" || "IN_PROGRESS" || "FAILED",
 * //     creationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAssessmentReportCommandInput - {@link CreateAssessmentReportCommandInput}
 * @returns {@link CreateAssessmentReportCommandOutput}
 * @see {@link CreateAssessmentReportCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentReportCommandOutput} for command's `response` shape.
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
export class CreateAssessmentReportCommand extends $Command
  .classBuilder<
    CreateAssessmentReportCommandInput,
    CreateAssessmentReportCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "CreateAssessmentReport", {})
  .n("AuditManagerClient", "CreateAssessmentReportCommand")
  .sc(CreateAssessmentReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssessmentReportRequest;
      output: CreateAssessmentReportResponse;
    };
    sdk: {
      input: CreateAssessmentReportCommandInput;
      output: CreateAssessmentReportCommandOutput;
    };
  };
}
