// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOrganizationRecommendationsRequest, ListOrganizationRecommendationsResponse } from "../models/models_0";
import {
  de_ListOrganizationRecommendationsCommand,
  se_ListOrganizationRecommendationsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TrustedAdvisorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrustedAdvisor", "ListOrganizationRecommendations", {})
  .n("TrustedAdvisorClient", "ListOrganizationRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_ListOrganizationRecommendationsCommand)
  .de(de_ListOrganizationRecommendationsCommand)
  .build() {}
