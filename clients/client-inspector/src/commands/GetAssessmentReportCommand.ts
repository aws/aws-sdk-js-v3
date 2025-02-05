// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetAssessmentReportRequest, GetAssessmentReportResponse } from "../models/models_0";
import { de_GetAssessmentReportCommand, se_GetAssessmentReportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssessmentReportCommand}.
 */
export interface GetAssessmentReportCommandInput extends GetAssessmentReportRequest {}
/**
 * @public
 *
 * The output of {@link GetAssessmentReportCommand}.
 */
export interface GetAssessmentReportCommandOutput extends GetAssessmentReportResponse, __MetadataBearer {}

/**
 * <p>Produces an assessment report that includes detailed and comprehensive results of a
 *          specified assessment run. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetAssessmentReportCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetAssessmentReportCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new InspectorClient(config);
 * const input = { // GetAssessmentReportRequest
 *   assessmentRunArn: "STRING_VALUE", // required
 *   reportFileFormat: "HTML" || "PDF", // required
 *   reportType: "FINDING" || "FULL", // required
 * };
 * const command = new GetAssessmentReportCommand(input);
 * const response = await client.send(command);
 * // { // GetAssessmentReportResponse
 * //   status: "WORK_IN_PROGRESS" || "FAILED" || "COMPLETED", // required
 * //   url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAssessmentReportCommandInput - {@link GetAssessmentReportCommandInput}
 * @returns {@link GetAssessmentReportCommandOutput}
 * @see {@link GetAssessmentReportCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentReportCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link AssessmentRunInProgressException} (client fault)
 *  <p>You cannot perform a specified action if an assessment run is currently in
 *          progress.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>Used by the <a>GetAssessmentReport</a> API. The request was rejected
 *          because you tried to generate a report for an assessment run that existed before reporting
 *          was supported in Amazon Inspector. You can only generate reports for assessment runs that
 *          took place or will take place after generating reports in Amazon Inspector became
 *          available.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @public
 */
export class GetAssessmentReportCommand extends $Command
  .classBuilder<
    GetAssessmentReportCommandInput,
    GetAssessmentReportCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "GetAssessmentReport", {})
  .n("InspectorClient", "GetAssessmentReportCommand")
  .f(void 0, void 0)
  .ser(se_GetAssessmentReportCommand)
  .de(de_GetAssessmentReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssessmentReportRequest;
      output: GetAssessmentReportResponse;
    };
    sdk: {
      input: GetAssessmentReportCommandInput;
      output: GetAssessmentReportCommandOutput;
    };
  };
}
