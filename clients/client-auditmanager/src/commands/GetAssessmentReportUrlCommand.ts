// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAssessmentReportUrlRequest, GetAssessmentReportUrlResponse } from "../models/models_0";
import { de_GetAssessmentReportUrlCommand, se_GetAssessmentReportUrlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssessmentReportUrlCommand}.
 */
export interface GetAssessmentReportUrlCommandInput extends GetAssessmentReportUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetAssessmentReportUrlCommand}.
 */
export interface GetAssessmentReportUrlCommandOutput extends GetAssessmentReportUrlResponse, __MetadataBearer {}

/**
 * <p> Gets the URL of an assessment report in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAssessmentReportUrlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAssessmentReportUrlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetAssessmentReportUrlRequest
 *   assessmentReportId: "STRING_VALUE", // required
 *   assessmentId: "STRING_VALUE", // required
 * };
 * const command = new GetAssessmentReportUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetAssessmentReportUrlResponse
 * //   preSignedUrl: { // URL
 * //     hyperlinkName: "STRING_VALUE",
 * //     link: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssessmentReportUrlCommandInput - {@link GetAssessmentReportUrlCommandInput}
 * @returns {@link GetAssessmentReportUrlCommandOutput}
 * @see {@link GetAssessmentReportUrlCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentReportUrlCommandOutput} for command's `response` shape.
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
export class GetAssessmentReportUrlCommand extends $Command
  .classBuilder<
    GetAssessmentReportUrlCommandInput,
    GetAssessmentReportUrlCommandOutput,
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
  .s("BedrockAssessmentManagerLambda", "GetAssessmentReportUrl", {})
  .n("AuditManagerClient", "GetAssessmentReportUrlCommand")
  .f(void 0, void 0)
  .ser(se_GetAssessmentReportUrlCommand)
  .de(de_GetAssessmentReportUrlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssessmentReportUrlRequest;
      output: GetAssessmentReportUrlResponse;
    };
    sdk: {
      input: GetAssessmentReportUrlCommandInput;
      output: GetAssessmentReportUrlCommandOutput;
    };
  };
}
