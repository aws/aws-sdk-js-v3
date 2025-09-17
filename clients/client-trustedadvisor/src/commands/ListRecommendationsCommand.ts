// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecommendationsRequest, ListRecommendationsResponse } from "../models/models_0";
import { de_ListRecommendationsCommand, se_ListRecommendationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandInput extends ListRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandOutput extends ListRecommendationsResponse, __MetadataBearer {}

/**
 * <p>List a filterable set of Recommendations</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, ListRecommendationsCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, ListRecommendationsCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // import type { TrustedAdvisorClientConfig } from "@aws-sdk/client-trustedadvisor";
 * const config = {}; // type is TrustedAdvisorClientConfig
 * const client = new TrustedAdvisorClient(config);
 * const input = { // ListRecommendationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   type: "standard" || "priority",
 *   status: "ok" || "warning" || "error",
 *   pillar: "cost_optimizing" || "performance" || "security" || "service_limits" || "fault_tolerance" || "operational_excellence",
 *   awsService: "STRING_VALUE",
 *   source: "aws_config" || "compute_optimizer" || "cost_explorer" || "lse" || "manual" || "pse" || "rds" || "resilience" || "resilience_hub" || "security_hub" || "stir" || "ta_check" || "well_architected",
 *   checkIdentifier: "STRING_VALUE",
 *   afterLastUpdatedAt: new Date("TIMESTAMP"),
 *   beforeLastUpdatedAt: new Date("TIMESTAMP"),
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   recommendationSummaries: [ // RecommendationSummaryList // required
 * //     { // RecommendationSummary
 * //       id: "STRING_VALUE", // required
 * //       type: "standard" || "priority", // required
 * //       checkArn: "STRING_VALUE",
 * //       status: "ok" || "warning" || "error", // required
 * //       lifecycleStage: "in_progress" || "pending_response" || "dismissed" || "resolved",
 * //       pillars: [ // RecommendationPillarList // required
 * //         "cost_optimizing" || "performance" || "security" || "service_limits" || "fault_tolerance" || "operational_excellence",
 * //       ],
 * //       source: "aws_config" || "compute_optimizer" || "cost_explorer" || "lse" || "manual" || "pse" || "rds" || "resilience" || "resilience_hub" || "security_hub" || "stir" || "ta_check" || "well_architected", // required
 * //       awsServices: [ // RecommendationAwsServiceList
 * //         "STRING_VALUE",
 * //       ],
 * //       name: "STRING_VALUE", // required
 * //       resourcesAggregates: { // RecommendationResourcesAggregates
 * //         okCount: Number("long"), // required
 * //         warningCount: Number("long"), // required
 * //         errorCount: Number("long"), // required
 * //       },
 * //       pillarSpecificAggregates: { // RecommendationPillarSpecificAggregates
 * //         costOptimizing: { // RecommendationCostOptimizingAggregates
 * //           estimatedMonthlySavings: Number("double"), // required
 * //           estimatedPercentMonthlySavings: Number("double"), // required
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecommendationsCommandInput - {@link ListRecommendationsCommandInput}
 * @returns {@link ListRecommendationsCommandOutput}
 * @see {@link ListRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link TrustedAdvisorClientResolvedConfig | config} for TrustedAdvisorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that access has been denied due to insufficient access</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
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
 * @example List all Recommendations
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "<REDACTED>",
 *   recommendationSummaries: [
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation/55fa4d2e-bbb7-491a-833b-5773e9589578",
 *       awsServices: [
 *         "iam"
 *       ],
 *       checkArn: "arn:aws:trustedadvisor:::check/7DAFEmoDos",
 *       id: "55fa4d2e-bbb7-491a-833b-5773e9589578",
 *       lastUpdatedAt: "2023-11-01T15:57:58.673Z",
 *       name: "MFA Recommendation",
 *       pillarSpecificAggregates: {
 *         costOptimizing: {
 *           estimatedMonthlySavings: 0.0,
 *           estimatedPercentMonthlySavings: 0.0
 *         }
 *       },
 *       pillars: [
 *         "security"
 *       ],
 *       resourcesAggregates: {
 *         errorCount: 1,
 *         okCount: 0,
 *         warningCount: 0
 *       },
 *       source: "ta_check",
 *       status: "error",
 *       type: "standard"
 *     },
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation/8b602b6f-452d-4cb2-8a9e-c7650955d9cd",
 *       awsServices: [
 *         "rds"
 *       ],
 *       checkArn: "arn:aws:trustedadvisor:::check/gjqMBn6pjz",
 *       id: "8b602b6f-452d-4cb2-8a9e-c7650955d9cd",
 *       lastUpdatedAt: "2023-11-01T15:58:17.397Z",
 *       name: "RDS clusters quota warning",
 *       pillarSpecificAggregates: {
 *         costOptimizing: {
 *           estimatedMonthlySavings: 0.0,
 *           estimatedPercentMonthlySavings: 0.0
 *         }
 *       },
 *       pillars: [
 *         "service_limits"
 *       ],
 *       resourcesAggregates: {
 *         errorCount: 0,
 *         okCount: 3,
 *         warningCount: 6
 *       },
 *       source: "ta_check",
 *       status: "warning",
 *       type: "standard"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Filter and return a max of one Recommendation that is a part of AWS IAM
 * ```javascript
 * //
 * const input = {
 *   awsService: "iam",
 *   maxResults: 100
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "<REDACTED>",
 *   recommendationSummaries: [
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation/55fa4d2e-bbb7-491a-833b-5773e9589578",
 *       awsServices: [
 *         "iam"
 *       ],
 *       checkArn: "arn:aws:trustedadvisor:::check/7DAFEmoDos",
 *       id: "55fa4d2e-bbb7-491a-833b-5773e9589578",
 *       lastUpdatedAt: "2023-11-01T15:57:58.673Z",
 *       name: "MFA Recommendation",
 *       pillarSpecificAggregates: {
 *         costOptimizing: {
 *           estimatedMonthlySavings: 0.0,
 *           estimatedPercentMonthlySavings: 0.0
 *         }
 *       },
 *       pillars: [
 *         "security"
 *       ],
 *       resourcesAggregates: {
 *         errorCount: 1,
 *         okCount: 0,
 *         warningCount: 0
 *       },
 *       source: "ta_check",
 *       status: "error",
 *       type: "standard"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Use the "nextToken" returned from a previous request to fetch the next page of filtered Recommendations
 * ```javascript
 * //
 * const input = {
 *   awsService: "rds",
 *   maxResults: 100,
 *   nextToken: "<REDACTED>"
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   recommendationSummaries: [
 *     {
 *       arn: "arn:aws:trustedadvisor::000000000000:recommendation/8b602b6f-452d-4cb2-8a9e-c7650955d9cd",
 *       awsServices: [
 *         "rds"
 *       ],
 *       checkArn: "arn:aws:trustedadvisor:::check/gjqMBn6pjz",
 *       id: "8b602b6f-452d-4cb2-8a9e-c7650955d9cd",
 *       lastUpdatedAt: "2023-11-01T15:58:17.397Z",
 *       name: "RDS clusters quota warning",
 *       pillarSpecificAggregates: {
 *         costOptimizing: {
 *           estimatedMonthlySavings: 0.0,
 *           estimatedPercentMonthlySavings: 0.0
 *         }
 *       },
 *       pillars: [
 *         "service_limits"
 *       ],
 *       resourcesAggregates: {
 *         errorCount: 0,
 *         okCount: 3,
 *         warningCount: 6
 *       },
 *       source: "ta_check",
 *       status: "warning",
 *       type: "standard"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRecommendationsCommand extends $Command
  .classBuilder<
    ListRecommendationsCommandInput,
    ListRecommendationsCommandOutput,
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
  .s("TrustedAdvisor", "ListRecommendations", {})
  .n("TrustedAdvisorClient", "ListRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_ListRecommendationsCommand)
  .de(de_ListRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendationsRequest;
      output: ListRecommendationsResponse;
    };
    sdk: {
      input: ListRecommendationsCommandInput;
      output: ListRecommendationsCommandOutput;
    };
  };
}
