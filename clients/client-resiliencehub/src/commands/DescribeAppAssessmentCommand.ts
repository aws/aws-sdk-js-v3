// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeAppAssessmentRequest,
  DescribeAppAssessmentResponse,
  DescribeAppAssessmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeAppAssessmentCommand, se_DescribeAppAssessmentCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppAssessmentCommand}.
 */
export interface DescribeAppAssessmentCommandInput extends DescribeAppAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppAssessmentCommand}.
 */
export interface DescribeAppAssessmentCommandOutput extends DescribeAppAssessmentResponse, __MetadataBearer {}

/**
 * <p>Describes an assessment for an Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeAppAssessmentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeAppAssessmentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeAppAssessmentRequest
 *   assessmentArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppAssessmentResponse
 * //   assessment: { // AppAssessment
 * //     appArn: "STRING_VALUE",
 * //     appVersion: "STRING_VALUE",
 * //     invoker: "User" || "System", // required
 * //     cost: { // Cost
 * //       amount: Number("double"), // required
 * //       currency: "STRING_VALUE", // required
 * //       frequency: "Hourly" || "Daily" || "Monthly" || "Yearly", // required
 * //     },
 * //     resiliencyScore: { // ResiliencyScore
 * //       score: Number("double"), // required
 * //       disruptionScore: { // DisruptionResiliencyScore // required
 * //         "<keys>": Number("double"),
 * //       },
 * //       componentScore: { // ScoringComponentResiliencyScores
 * //         "<keys>": { // ScoringComponentResiliencyScore
 * //           score: Number("double"),
 * //           possibleScore: Number("double"),
 * //           outstandingCount: Number("long"),
 * //           excludedCount: Number("long"),
 * //         },
 * //       },
 * //     },
 * //     compliance: { // AssessmentCompliance
 * //       "<keys>": { // DisruptionCompliance
 * //         achievableRtoInSecs: Number("int"),
 * //         currentRtoInSecs: Number("int"),
 * //         rtoReferenceId: "STRING_VALUE",
 * //         rtoDescription: "STRING_VALUE",
 * //         currentRpoInSecs: Number("int"),
 * //         rpoReferenceId: "STRING_VALUE",
 * //         rpoDescription: "STRING_VALUE",
 * //         complianceStatus: "PolicyBreached" || "PolicyMet" || "NotApplicable" || "MissingPolicy", // required
 * //         achievableRpoInSecs: Number("int"),
 * //         message: "STRING_VALUE",
 * //       },
 * //     },
 * //     complianceStatus: "PolicyBreached" || "PolicyMet" || "NotApplicable" || "MissingPolicy",
 * //     assessmentStatus: "Pending" || "InProgress" || "Failed" || "Success", // required
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     message: "STRING_VALUE",
 * //     assessmentName: "STRING_VALUE",
 * //     assessmentArn: "STRING_VALUE", // required
 * //     policy: { // ResiliencyPolicy
 * //       policyArn: "STRING_VALUE",
 * //       policyName: "STRING_VALUE",
 * //       policyDescription: "STRING_VALUE",
 * //       dataLocationConstraint: "AnyLocation" || "SameContinent" || "SameCountry",
 * //       tier: "MissionCritical" || "Critical" || "Important" || "CoreServices" || "NonCritical" || "NotApplicable",
 * //       estimatedCostTier: "L1" || "L2" || "L3" || "L4",
 * //       policy: { // DisruptionPolicy
 * //         "<keys>": { // FailurePolicy
 * //           rtoInSecs: Number("int"), // required
 * //           rpoInSecs: Number("int"), // required
 * //         },
 * //       },
 * //       creationTime: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     resourceErrorsDetails: { // ResourceErrorsDetails
 * //       resourceErrors: [ // ResourceErrorList
 * //         { // ResourceError
 * //           logicalResourceId: "STRING_VALUE",
 * //           physicalResourceId: "STRING_VALUE",
 * //           reason: "STRING_VALUE",
 * //         },
 * //       ],
 * //       hasMoreErrors: true || false,
 * //     },
 * //     versionName: "STRING_VALUE",
 * //     driftStatus: "NotChecked" || "NotDetected" || "Detected",
 * //     summary: { // AssessmentSummary
 * //       summary: "STRING_VALUE",
 * //       riskRecommendations: [ // AssessmentRiskRecommendationList
 * //         { // AssessmentRiskRecommendation
 * //           risk: "STRING_VALUE",
 * //           recommendation: "STRING_VALUE",
 * //           appComponents: [ // AppComponentNameList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppAssessmentCommandInput - {@link DescribeAppAssessmentCommandInput}
 * @returns {@link DescribeAppAssessmentCommandOutput}
 * @see {@link DescribeAppAssessmentCommandInput} for command's `input` shape.
 * @see {@link DescribeAppAssessmentCommandOutput} for command's `response` shape.
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
export class DescribeAppAssessmentCommand extends $Command
  .classBuilder<
    DescribeAppAssessmentCommandInput,
    DescribeAppAssessmentCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "DescribeAppAssessment", {})
  .n("ResiliencehubClient", "DescribeAppAssessmentCommand")
  .f(void 0, DescribeAppAssessmentResponseFilterSensitiveLog)
  .ser(se_DescribeAppAssessmentCommand)
  .de(de_DescribeAppAssessmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppAssessmentRequest;
      output: DescribeAppAssessmentResponse;
    };
    sdk: {
      input: DescribeAppAssessmentCommandInput;
      output: DescribeAppAssessmentCommandOutput;
    };
  };
}
