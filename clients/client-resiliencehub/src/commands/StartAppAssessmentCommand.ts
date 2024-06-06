// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartAppAssessmentRequest,
  StartAppAssessmentRequestFilterSensitiveLog,
  StartAppAssessmentResponse,
  StartAppAssessmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartAppAssessmentCommand, se_StartAppAssessmentCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAppAssessmentCommand}.
 */
export interface StartAppAssessmentCommandInput extends StartAppAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link StartAppAssessmentCommand}.
 */
export interface StartAppAssessmentCommandOutput extends StartAppAssessmentResponse, __MetadataBearer {}

/**
 * <p>Creates a new application assessment for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, StartAppAssessmentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, StartAppAssessmentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // StartAppAssessmentRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   assessmentName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartAppAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // StartAppAssessmentResponse
 * //   assessment: { // AppAssessment
 * //     appArn: "STRING_VALUE",
 * //     appVersion: "STRING_VALUE",
 * //     invoker: "STRING_VALUE", // required
 * //     cost: { // Cost
 * //       amount: Number("double"), // required
 * //       currency: "STRING_VALUE", // required
 * //       frequency: "STRING_VALUE", // required
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
 * //         complianceStatus: "STRING_VALUE", // required
 * //         achievableRpoInSecs: Number("int"),
 * //         message: "STRING_VALUE",
 * //       },
 * //     },
 * //     complianceStatus: "STRING_VALUE",
 * //     assessmentStatus: "STRING_VALUE", // required
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     message: "STRING_VALUE",
 * //     assessmentName: "STRING_VALUE",
 * //     assessmentArn: "STRING_VALUE", // required
 * //     policy: { // ResiliencyPolicy
 * //       policyArn: "STRING_VALUE",
 * //       policyName: "STRING_VALUE",
 * //       policyDescription: "STRING_VALUE",
 * //       dataLocationConstraint: "STRING_VALUE",
 * //       tier: "STRING_VALUE",
 * //       estimatedCostTier: "STRING_VALUE",
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
 * //     driftStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartAppAssessmentCommandInput - {@link StartAppAssessmentCommandInput}
 * @returns {@link StartAppAssessmentCommandOutput}
 * @see {@link StartAppAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartAppAssessmentCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
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
 * @public
 */
export class StartAppAssessmentCommand extends $Command
  .classBuilder<
    StartAppAssessmentCommandInput,
    StartAppAssessmentCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "StartAppAssessment", {})
  .n("ResiliencehubClient", "StartAppAssessmentCommand")
  .f(StartAppAssessmentRequestFilterSensitiveLog, StartAppAssessmentResponseFilterSensitiveLog)
  .ser(se_StartAppAssessmentCommand)
  .de(de_StartAppAssessmentCommand)
  .build() {}
