// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInsightsByAssessmentRequest, GetInsightsByAssessmentResponse } from "../models/models_0";
import { de_GetInsightsByAssessmentCommand, se_GetInsightsByAssessmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInsightsByAssessmentCommand}.
 */
export interface GetInsightsByAssessmentCommandInput extends GetInsightsByAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightsByAssessmentCommand}.
 */
export interface GetInsightsByAssessmentCommandOutput extends GetInsightsByAssessmentResponse, __MetadataBearer {}

/**
 * <p>Gets the latest analytics data for a specific active assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetInsightsByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetInsightsByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetInsightsByAssessmentRequest
 *   assessmentId: "STRING_VALUE", // required
 * };
 * const command = new GetInsightsByAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightsByAssessmentResponse
 * //   insights: { // InsightsByAssessment
 * //     noncompliantEvidenceCount: Number("int"),
 * //     compliantEvidenceCount: Number("int"),
 * //     inconclusiveEvidenceCount: Number("int"),
 * //     assessmentControlsCountByNoncompliantEvidence: Number("int"),
 * //     totalAssessmentControlsCount: Number("int"),
 * //     lastUpdated: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInsightsByAssessmentCommandInput - {@link GetInsightsByAssessmentCommandInput}
 * @returns {@link GetInsightsByAssessmentCommandOutput}
 * @see {@link GetInsightsByAssessmentCommandInput} for command's `input` shape.
 * @see {@link GetInsightsByAssessmentCommandOutput} for command's `response` shape.
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
export class GetInsightsByAssessmentCommand extends $Command
  .classBuilder<
    GetInsightsByAssessmentCommandInput,
    GetInsightsByAssessmentCommandOutput,
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
  .s("BedrockAssessmentManagerLambda", "GetInsightsByAssessment", {})
  .n("AuditManagerClient", "GetInsightsByAssessmentCommand")
  .f(void 0, void 0)
  .ser(se_GetInsightsByAssessmentCommand)
  .de(de_GetInsightsByAssessmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInsightsByAssessmentRequest;
      output: GetInsightsByAssessmentResponse;
    };
    sdk: {
      input: GetInsightsByAssessmentCommandInput;
      output: GetInsightsByAssessmentCommandOutput;
    };
  };
}
