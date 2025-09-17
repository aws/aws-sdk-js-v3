// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetRecommendationRequest,
  GetRecommendationResponse,
  GetRecommendationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRecommendationCommand, se_GetRecommendationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationCommand}.
 */
export interface GetRecommendationCommandInput extends GetRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationCommand}.
 */
export interface GetRecommendationCommandOutput extends GetRecommendationResponse, __MetadataBearer {}

/**
 * <p>Get a specific Recommendation</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, GetRecommendationCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, GetRecommendationCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // import type { TrustedAdvisorClientConfig } from "@aws-sdk/client-trustedadvisor";
 * const config = {}; // type is TrustedAdvisorClientConfig
 * const client = new TrustedAdvisorClient(config);
 * const input = { // GetRecommendationRequest
 *   recommendationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationResponse
 * //   recommendation: { // Recommendation
 * //     id: "STRING_VALUE", // required
 * //     type: "standard" || "priority", // required
 * //     checkArn: "STRING_VALUE",
 * //     status: "ok" || "warning" || "error", // required
 * //     lifecycleStage: "in_progress" || "pending_response" || "dismissed" || "resolved",
 * //     pillars: [ // RecommendationPillarList // required
 * //       "cost_optimizing" || "performance" || "security" || "service_limits" || "fault_tolerance" || "operational_excellence",
 * //     ],
 * //     source: "aws_config" || "compute_optimizer" || "cost_explorer" || "lse" || "manual" || "pse" || "rds" || "resilience" || "resilience_hub" || "security_hub" || "stir" || "ta_check" || "well_architected", // required
 * //     awsServices: [ // RecommendationAwsServiceList
 * //       "STRING_VALUE",
 * //     ],
 * //     name: "STRING_VALUE", // required
 * //     resourcesAggregates: { // RecommendationResourcesAggregates
 * //       okCount: Number("long"), // required
 * //       warningCount: Number("long"), // required
 * //       errorCount: Number("long"), // required
 * //     },
 * //     pillarSpecificAggregates: { // RecommendationPillarSpecificAggregates
 * //       costOptimizing: { // RecommendationCostOptimizingAggregates
 * //         estimatedMonthlySavings: Number("double"), // required
 * //         estimatedPercentMonthlySavings: Number("double"), // required
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     arn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createdBy: "STRING_VALUE",
 * //     updatedOnBehalfOf: "STRING_VALUE",
 * //     updatedOnBehalfOfJobTitle: "STRING_VALUE",
 * //     updateReason: "STRING_VALUE",
 * //     updateReasonCode: "non_critical_account" || "temporary_account" || "valid_business_case" || "other_methods_available" || "low_priority" || "not_applicable" || "other",
 * //     resolvedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecommendationCommandInput - {@link GetRecommendationCommandInput}
 * @returns {@link GetRecommendationCommandOutput}
 * @see {@link GetRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationCommandOutput} for command's `response` shape.
 * @see {@link TrustedAdvisorClientResolvedConfig | config} for TrustedAdvisorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that access has been denied due to insufficient access</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception that the requested resource has not been found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception to notify that requests are being throttled</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Exception that the request failed to satisfy service constraints</p>
 *
 * @throws {@link TrustedAdvisorServiceException}
 * <p>Base exception class for all service exceptions from TrustedAdvisor service.</p>
 *
 *
 * @example Get a Recommendation by ARN
 * ```javascript
 * //
 * const input = {
 *   recommendationIdentifier: "arn:aws:trustedadvisor::000000000000:recommendation/55fa4d2e-bbb7-491a-833b-5773e9589578"
 * };
 * const command = new GetRecommendationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   recommendation: {
 *     arn: "arn:aws:trustedadvisor::000000000000:recommendation/55fa4d2e-bbb7-491a-833b-5773e9589578",
 *     awsServices: [
 *       "iam"
 *     ],
 *     checkArn: "arn:aws:trustedadvisor:::check/7DAFEmoDos",
 *     description: "Enable multi-factor authentication",
 *     id: "55fa4d2e-bbb7-491a-833b-5773e9589578",
 *     lastUpdatedAt: "2023-11-01T15:57:58.673Z",
 *     name: "MFA Recommendation",
 *     pillarSpecificAggregates: {
 *       costOptimizing: {
 *         estimatedMonthlySavings: 0.0,
 *         estimatedPercentMonthlySavings: 0.0
 *       }
 *     },
 *     pillars: [
 *       "security"
 *     ],
 *     resourcesAggregates: {
 *       errorCount: 1,
 *       okCount: 0,
 *       warningCount: 0
 *     },
 *     source: "ta_check",
 *     status: "error",
 *     type: "standard"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRecommendationCommand extends $Command
  .classBuilder<
    GetRecommendationCommandInput,
    GetRecommendationCommandOutput,
    TrustedAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TrustedAdvisorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrustedAdvisor", "GetRecommendation", {})
  .n("TrustedAdvisorClient", "GetRecommendationCommand")
  .f(void 0, GetRecommendationResponseFilterSensitiveLog)
  .ser(se_GetRecommendationCommand)
  .de(de_GetRecommendationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendationRequest;
      output: GetRecommendationResponse;
    };
    sdk: {
      input: GetRecommendationCommandInput;
      output: GetRecommendationCommandOutput;
    };
  };
}
