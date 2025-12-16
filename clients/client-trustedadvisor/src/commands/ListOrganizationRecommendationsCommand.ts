// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListOrganizationRecommendationsRequest,
  ListOrganizationRecommendationsResponse,
} from "../models/models_0";
import { ListOrganizationRecommendations$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  TrustedAdvisorClientResolvedConfig,
} from "../TrustedAdvisorClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationRecommendationsCommand}.
 */
export interface ListOrganizationRecommendationsCommandInput extends ListOrganizationRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationRecommendationsCommand}.
 */
export interface ListOrganizationRecommendationsCommandOutput
  extends ListOrganizationRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>List a filterable set of Recommendations within an Organization. This API only supports prioritized
 *             recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, ListOrganizationRecommendationsCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, ListOrganizationRecommendationsCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * // import type { TrustedAdvisorClientConfig } from "@aws-sdk/client-trustedadvisor";
 * const config = {}; // type is TrustedAdvisorClientConfig
 * const client = new TrustedAdvisorClient(config);
 * const input = { // ListOrganizationRecommendationsRequest
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
 * const command = new ListOrganizationRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   organizationRecommendationSummaries: [ // OrganizationRecommendationSummaryList // required
 * //     { // OrganizationRecommendationSummary
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
 * @param ListOrganizationRecommendationsCommandInput - {@link ListOrganizationRecommendationsCommandInput}
 * @returns {@link ListOrganizationRecommendationsCommandOutput}
 * @see {@link ListOrganizationRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationRecommendationsCommandOutput} for command's `response` shape.
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
 * @example List all of an AWS Organization's Recommendations
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListOrganizationRecommendationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "<REDACTED>",
 *   organizationRecommendationSummaries: [
 *     {
 *       arn: "arn:aws:trustedadvisor:::organization-recommendation/9534ec9b-bf3a-44e8-8213-2ed68b39d9d5",
 *       awsServices: [
 *         "lambda"
 *       ],
 *       checkArn: "arn:aws:trustedadvisor:::check/L4dfs2Q4C5",
 *       id: "9534ec9b-bf3a-44e8-8213-2ed68b39d9d5",
 *       lifecycleStage: "resolved",
 *       name: "Lambda Runtime Deprecation Warning",
 *       pillars: [
 *         "security"
 *       ],
 *       resourcesAggregates: {
 *         errorCount: 0,
 *         okCount: 0,
 *         warningCount: 0
 *       },
 *       source: "ta_check",
 *       status: "warning",
 *       type: "priority"
 *     },
 *     {
 *       arn: "arn:aws:trustedadvisor:::organization-recommendation/4ecff4d4-1bc1-4c99-a5b8-0fff9ee500d6",
 *       awsServices: [
 *         "lambda"
 *       ],
 *       checkArn: "arn:aws:trustedadvisor:::check/L4dfs2Q4C5",
 *       id: "4ecff4d4-1bc1-4c99-a5b8-0fff9ee500d6",
 *       lifecycleStage: "resolved",
 *       name: "Lambda Runtime Deprecation Warning",
 *       pillars: [
 *         "security"
 *       ],
 *       resourcesAggregates: {
 *         errorCount: 0,
 *         okCount: 0,
 *         warningCount: 0
 *       },
 *       source: "ta_check",
 *       status: "warning",
 *       type: "priority"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Filter and return a max of one AWS Organization Recommendation that is a part of the "security" pillar
 * ```javascript
 * //
 * const input = {
 *   maxResults: 100,
 *   pillar: "security"
 * };
 * const command = new ListOrganizationRecommendationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "<REDACTED>",
 *   organizationRecommendationSummaries: [
 *     {
 *       arn: "arn:aws:trustedadvisor:::organization-recommendation/9534ec9b-bf3a-44e8-8213-2ed68b39d9d5",
 *       awsServices: [
 *         "lambda"
 *       ],
 *       checkArn: "arn:aws:trustedadvisor:::check/L4dfs2Q4C5",
 *       id: "9534ec9b-bf3a-44e8-8213-2ed68b39d9d5",
 *       lifecycleStage: "resolved",
 *       name: "Lambda Runtime Deprecation Warning",
 *       pillars: [
 *         "security"
 *       ],
 *       resourcesAggregates: {
 *         errorCount: 0,
 *         okCount: 0,
 *         warningCount: 0
 *       },
 *       source: "ta_check",
 *       status: "warning",
 *       type: "priority"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Use the "nextToken" returned from a previous request to fetch the next page of filtered AWS Organization Recommendations that are a part of the "security" pillar
 * ```javascript
 * //
 * const input = {
 *   maxResults: 100,
 *   nextToken: "<REDACTED>",
 *   pillar: "security"
 * };
 * const command = new ListOrganizationRecommendationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   organizationRecommendationSummaries: [
 *     {
 *       arn: "arn:aws:trustedadvisor:::organization-recommendation/4ecff4d4-1bc1-4c99-a5b8-0fff9ee500d6",
 *       awsServices: [
 *         "lambda"
 *       ],
 *       checkArn: "arn:aws:trustedadvisor:::check/L4dfs2Q4C5",
 *       id: "4ecff4d4-1bc1-4c99-a5b8-0fff9ee500d6",
 *       lifecycleStage: "resolved",
 *       name: "Lambda Runtime Deprecation Warning",
 *       pillars: [
 *         "security"
 *       ],
 *       resourcesAggregates: {
 *         errorCount: 0,
 *         okCount: 0,
 *         warningCount: 0
 *       },
 *       source: "ta_check",
 *       status: "warning",
 *       type: "priority"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListOrganizationRecommendationsCommand extends $Command
  .classBuilder<
    ListOrganizationRecommendationsCommandInput,
    ListOrganizationRecommendationsCommandOutput,
    TrustedAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TrustedAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrustedAdvisor", "ListOrganizationRecommendations", {})
  .n("TrustedAdvisorClient", "ListOrganizationRecommendationsCommand")
  .sc(ListOrganizationRecommendations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationRecommendationsRequest;
      output: ListOrganizationRecommendationsResponse;
    };
    sdk: {
      input: ListOrganizationRecommendationsCommandInput;
      output: ListOrganizationRecommendationsCommandOutput;
    };
  };
}
