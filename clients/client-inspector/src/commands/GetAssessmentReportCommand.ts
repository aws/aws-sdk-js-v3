// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAssessmentReportRequest, GetAssessmentReportResponse } from "../models/models_0";
import { GetAssessmentReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Produces an assessment report that includes detailed and comprehensive results of a specified assessment run.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetAssessmentReportCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetAssessmentReportCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
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
 *
 * You do not have required permissions to access the requested resource.
 *
 * @throws {@link AssessmentRunInProgressException} (client fault)
 *
 * You cannot perform a specified action if an assessment run is currently in progress.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced an entity that does not exist. The error code describes the entity.
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *
 * The serice is temporary unavailable.
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *
 * Used by the GetAssessmentReport API. The request was rejected because you tried to generate a report for an assessment run that existed before reporting was supported in Amazon Inspector. You can only generate reports for assessment runs that took place or will take place after generating reports in Amazon Inspector became available.
 *
 * @throws {@link InspectorServiceException}
 *
 * Base exception class for all service exceptions from Inspector service.
 *
 * @public
 */
export class GetAssessmentReportCommand extends command<GetAssessmentReportCommandInput, GetAssessmentReportCommandOutput>(
  _ep0,
  _mw0,
  "GetAssessmentReport",
  GetAssessmentReport$
) {
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
