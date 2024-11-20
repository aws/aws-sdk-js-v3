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
import { ListRecommendationsRequest, ListRecommendationsResponse } from "../models/models_0";
import { de_ListRecommendationsCommand, se_ListRecommendationsCommand } from "../protocols/Aws_json1_0";

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
 * <p>Returns a list of recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, ListRecommendationsCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, ListRecommendationsCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * const client = new CostOptimizationHubClient(config);
 * const input = { // ListRecommendationsRequest
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
 *   orderBy: { // OrderBy
 *     dimension: "STRING_VALUE",
 *     order: "Asc" || "Desc",
 *   },
 *   includeAllRecommendations: true || false,
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsResponse
 * //   items: [ // RecommendationList
 * //     { // Recommendation
 * //       recommendationId: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       resourceId: "STRING_VALUE",
 * //       resourceArn: "STRING_VALUE",
 * //       currentResourceType: "STRING_VALUE",
 * //       recommendedResourceType: "STRING_VALUE",
 * //       estimatedMonthlySavings: Number("double"),
 * //       estimatedSavingsPercentage: Number("double"),
 * //       estimatedMonthlyCost: Number("double"),
 * //       currencyCode: "STRING_VALUE",
 * //       implementationEffort: "STRING_VALUE",
 * //       restartNeeded: true || false,
 * //       actionType: "STRING_VALUE",
 * //       rollbackPossible: true || false,
 * //       currentResourceSummary: "STRING_VALUE",
 * //       recommendedResourceSummary: "STRING_VALUE",
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //       recommendationLookbackPeriodInDays: Number("int"),
 * //       source: "ComputeOptimizer" || "CostExplorer",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationsCommandInput - {@link ListRecommendationsCommandInput}
 * @returns {@link ListRecommendationsCommandOutput}
 * @see {@link ListRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsCommandOutput} for command's `response` shape.
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
export class ListRecommendationsCommand extends $Command
  .classBuilder<
    ListRecommendationsCommandInput,
    ListRecommendationsCommandOutput,
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
  .s("CostOptimizationHubService", "ListRecommendations", {})
  .n("CostOptimizationHubClient", "ListRecommendationsCommand")
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
