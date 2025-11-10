// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInsightsRequest, GetInsightsResponse } from "../models/models_0";
import { GetInsights } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInsightsCommand}.
 */
export interface GetInsightsCommandInput extends GetInsightsRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightsCommand}.
 */
export interface GetInsightsCommandOutput extends GetInsightsResponse, __MetadataBearer {}

/**
 * <p>Gets the latest analytics data for all your current active assessments. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetInsightsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetInsightsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = {};
 * const command = new GetInsightsCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightsResponse
 * //   insights: { // Insights
 * //     activeAssessmentsCount: Number("int"),
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
 * @param GetInsightsCommandInput - {@link GetInsightsCommandInput}
 * @returns {@link GetInsightsCommandOutput}
 * @see {@link GetInsightsCommandInput} for command's `input` shape.
 * @see {@link GetInsightsCommandOutput} for command's `response` shape.
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
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 *
 * @public
 */
export class GetInsightsCommand extends $Command
  .classBuilder<
    GetInsightsCommandInput,
    GetInsightsCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "GetInsights", {})
  .n("AuditManagerClient", "GetInsightsCommand")
  .sc(GetInsights)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetInsightsResponse;
    };
    sdk: {
      input: GetInsightsCommandInput;
      output: GetInsightsCommandOutput;
    };
  };
}
