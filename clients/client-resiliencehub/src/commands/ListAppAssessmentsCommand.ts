// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAppAssessmentsRequest, ListAppAssessmentsResponse } from "../models/models_0";
import type { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { ListAppAssessments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppAssessmentsCommand}.
 */
export interface ListAppAssessmentsCommandInput extends ListAppAssessmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppAssessmentsCommand}.
 */
export interface ListAppAssessmentsCommandOutput extends ListAppAssessmentsResponse, __MetadataBearer {}

/**
 * <p>Lists the assessments for an Resilience Hub application. You can use request
 *       parameters to refine the results for the response object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppAssessmentsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppAssessmentsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppAssessmentsRequest
 *   appArn: "STRING_VALUE",
 *   assessmentName: "STRING_VALUE",
 *   assessmentStatus: [ // AssessmentStatusList
 *     "Pending" || "InProgress" || "Failed" || "Success",
 *   ],
 *   complianceStatus: "PolicyBreached" || "PolicyMet" || "NotApplicable" || "MissingPolicy",
 *   invoker: "User" || "System",
 *   reverseOrder: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppAssessmentsResponse
 * //   nextToken: "STRING_VALUE",
 * //   assessmentSummaries: [ // AppAssessmentSummaryList // required
 * //     { // AppAssessmentSummary
 * //       appArn: "STRING_VALUE",
 * //       appVersion: "STRING_VALUE",
 * //       assessmentStatus: "Pending" || "InProgress" || "Failed" || "Success", // required
 * //       invoker: "User" || "System",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       message: "STRING_VALUE",
 * //       assessmentName: "STRING_VALUE",
 * //       assessmentArn: "STRING_VALUE", // required
 * //       complianceStatus: "PolicyBreached" || "PolicyMet" || "NotApplicable" || "MissingPolicy",
 * //       cost: { // Cost
 * //         amount: Number("double"), // required
 * //         currency: "STRING_VALUE", // required
 * //         frequency: "Hourly" || "Daily" || "Monthly" || "Yearly", // required
 * //       },
 * //       resiliencyScore: Number("double"),
 * //       versionName: "STRING_VALUE",
 * //       driftStatus: "NotChecked" || "NotDetected" || "Detected",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAppAssessmentsCommandInput - {@link ListAppAssessmentsCommandInput}
 * @returns {@link ListAppAssessmentsCommandOutput}
 * @see {@link ListAppAssessmentsCommandInput} for command's `input` shape.
 * @see {@link ListAppAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class ListAppAssessmentsCommand extends $Command
  .classBuilder<
    ListAppAssessmentsCommandInput,
    ListAppAssessmentsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "ListAppAssessments", {})
  .n("ResiliencehubClient", "ListAppAssessmentsCommand")
  .sc(ListAppAssessments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppAssessmentsRequest;
      output: ListAppAssessmentsResponse;
    };
    sdk: {
      input: ListAppAssessmentsCommandInput;
      output: ListAppAssessmentsCommandOutput;
    };
  };
}
