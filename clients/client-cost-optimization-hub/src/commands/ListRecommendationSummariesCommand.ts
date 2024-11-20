// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CostOptimizationHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostOptimizationHubClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecommendationSummariesRequest, ListRecommendationSummariesResponse } from "../models/models_0";
import { de_ListRecommendationSummariesCommand, se_ListRecommendationSummariesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationSummariesCommand}.
 */
export interface ListRecommendationSummariesCommandInput extends ListRecommendationSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationSummariesCommand}.
 */
export interface ListRecommendationSummariesCommandOutput
  extends ListRecommendationSummariesResponse,
    __MetadataBearer {}

/**
 * <p>Returns a concise representation of savings estimates for resources. Also returns de-duped
 *       savings across different types of recommendations.</p>
 *          <note>
 *             <p>The following filters are not supported for this API: <code>recommendationIds</code>,
 *           <code>resourceArns</code>, and <code>resourceIds</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, ListRecommendationSummariesCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, ListRecommendationSummariesCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * const client = new CostOptimizationHubClient(config);
 * const input = { // ListRecommendationSummariesRequest
 *   filter: { // Filter
 *     restartNeeded: true || false,
 *     rollbackPossible: true || false,
 *     implementationEfforts: [ // ImplementationEffortList
 *       "VeryLow" || "Low" || "Medium" || "High" || "VeryHigh",
 *     ],
 *     accountIds: [ // AccountIdList
 *       "STRING_VALUE",
 *     ],
 *     regions: [ // RegionList
 *       "STRING_VALUE",
 *     ],
 *     resourceTypes: [ // ResourceTypeList
 *       "Ec2Instance" || "LambdaFunction" || "EbsVolume" || "EcsService" || "Ec2AutoScalingGroup" || "Ec2InstanceSavingsPlans" || "ComputeSavingsPlans" || "SageMakerSavingsPlans" || "Ec2ReservedInstances" || "RdsReservedInstances" || "OpenSearchReservedInstances" || "RedshiftReservedInstances" || "ElastiCacheReservedInstances" || "RdsDbInstanceStorage" || "RdsDbInstance",
 *     ],
 *     actionTypes: [ // ActionTypeList
 *       "Rightsize" || "Stop" || "Upgrade" || "PurchaseSavingsPlans" || "PurchaseReservedInstances" || "MigrateToGraviton" || "Delete",
 *     ],
 *     tags: [ // TagList
 *       { // Tag
 *         key: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     resourceIds: [ // ResourceIdList
 *       "STRING_VALUE",
 *     ],
 *     resourceArns: [ // ResourceArnList
 *       "STRING_VALUE",
 *     ],
 *     recommendationIds: [ // RecommendationIdList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   groupBy: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   metrics: [ // SummaryMetricsList
 *     "SavingsPercentage",
 *   ],
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommendationSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationSummariesResponse
 * //   estimatedTotalDedupedSavings: Number("double"),
 * //   items: [ // RecommendationSummariesList
 * //     { // RecommendationSummary
 * //       group: "STRING_VALUE",
 * //       estimatedMonthlySavings: Number("double"),
 * //       recommendationCount: Number("int"),
 * //     },
 * //   ],
 * //   groupBy: "STRING_VALUE",
 * //   currencyCode: "STRING_VALUE",
 * //   metrics: { // SummaryMetricsResult
 * //     savingsPercentage: "STRING_VALUE",
 * //   },
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationSummariesCommandInput - {@link ListRecommendationSummariesCommandInput}
 * @returns {@link ListRecommendationSummariesCommandOutput}
 * @see {@link ListRecommendationSummariesCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationSummariesCommandOutput} for command's `response` shape.
 * @see {@link CostOptimizationHubClientResolvedConfig | config} for CostOptimizationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link CostOptimizationHubServiceException}
 * <p>Base exception class for all service exceptions from CostOptimizationHub service.</p>
 *
 * @public
 */
export class ListRecommendationSummariesCommand extends $Command
  .classBuilder<
    ListRecommendationSummariesCommandInput,
    ListRecommendationSummariesCommandOutput,
    CostOptimizationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostOptimizationHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CostOptimizationHubService", "ListRecommendationSummaries", {})
  .n("CostOptimizationHubClient", "ListRecommendationSummariesCommand")
  .f(void 0, void 0)
  .ser(se_ListRecommendationSummariesCommand)
  .de(de_ListRecommendationSummariesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendationSummariesRequest;
      output: ListRecommendationSummariesResponse;
    };
    sdk: {
      input: ListRecommendationSummariesCommandInput;
      output: ListRecommendationSummariesCommandOutput;
    };
  };
}
