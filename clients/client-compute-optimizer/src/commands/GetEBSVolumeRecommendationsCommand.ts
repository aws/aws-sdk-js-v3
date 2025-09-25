// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEBSVolumeRecommendationsRequest, GetEBSVolumeRecommendationsResponse } from "../models/models_0";
import { GetEBSVolumeRecommendations } from "../schemas/schemas_1_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEBSVolumeRecommendationsCommand}.
 */
export interface GetEBSVolumeRecommendationsCommandInput extends GetEBSVolumeRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetEBSVolumeRecommendationsCommand}.
 */
export interface GetEBSVolumeRecommendationsCommandOutput
  extends GetEBSVolumeRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p>
 *          <p>Compute Optimizer generates recommendations for Amazon EBS volumes that
 *             meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported
 *                 resources and requirements</a> in the <i>Compute Optimizer User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEBSVolumeRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEBSVolumeRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetEBSVolumeRecommendationsRequest
 *   volumeArns: [ // VolumeArns
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // EBSFilters
 *     { // EBSFilter
 *       name: "Finding",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetEBSVolumeRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetEBSVolumeRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   volumeRecommendations: [ // VolumeRecommendations
 * //     { // VolumeRecommendation
 * //       volumeArn: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       currentConfiguration: { // VolumeConfiguration
 * //         volumeType: "STRING_VALUE",
 * //         volumeSize: Number("int"),
 * //         volumeBaselineIOPS: Number("int"),
 * //         volumeBurstIOPS: Number("int"),
 * //         volumeBaselineThroughput: Number("int"),
 * //         volumeBurstThroughput: Number("int"),
 * //         rootVolume: true || false,
 * //       },
 * //       finding: "Optimized" || "NotOptimized",
 * //       utilizationMetrics: [ // EBSUtilizationMetrics
 * //         { // EBSUtilizationMetric
 * //           name: "VolumeReadOpsPerSecond" || "VolumeWriteOpsPerSecond" || "VolumeReadBytesPerSecond" || "VolumeWriteBytesPerSecond",
 * //           statistic: "Maximum" || "Average",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       lookBackPeriodInDays: Number("double"),
 * //       volumeRecommendationOptions: [ // VolumeRecommendationOptions
 * //         { // VolumeRecommendationOption
 * //           configuration: {
 * //             volumeType: "STRING_VALUE",
 * //             volumeSize: Number("int"),
 * //             volumeBaselineIOPS: Number("int"),
 * //             volumeBurstIOPS: Number("int"),
 * //             volumeBaselineThroughput: Number("int"),
 * //             volumeBurstThroughput: Number("int"),
 * //             rootVolume: true || false,
 * //           },
 * //           performanceRisk: Number("double"),
 * //           rank: Number("int"),
 * //           savingsOpportunity: { // SavingsOpportunity
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //           savingsOpportunityAfterDiscounts: { // EBSSavingsOpportunityAfterDiscounts
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // EBSEstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //       currentPerformanceRisk: "VeryLow" || "Low" || "Medium" || "High",
 * //       effectiveRecommendationPreferences: { // EBSEffectiveRecommendationPreferences
 * //         savingsEstimationMode: { // EBSSavingsEstimationMode
 * //           source: "PublicPricing" || "CostExplorerRightsizing" || "CostOptimizationHub",
 * //         },
 * //       },
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   errors: [ // GetRecommendationErrors
 * //     { // GetRecommendationError
 * //       identifier: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEBSVolumeRecommendationsCommandInput - {@link GetEBSVolumeRecommendationsCommandInput}
 * @returns {@link GetEBSVolumeRecommendationsCommandOutput}
 * @see {@link GetEBSVolumeRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetEBSVolumeRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ComputeOptimizerServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizer service.</p>
 *
 *
 * @public
 */
export class GetEBSVolumeRecommendationsCommand extends $Command
  .classBuilder<
    GetEBSVolumeRecommendationsCommandInput,
    GetEBSVolumeRecommendationsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "GetEBSVolumeRecommendations", {})
  .n("ComputeOptimizerClient", "GetEBSVolumeRecommendationsCommand")
  .sc(GetEBSVolumeRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEBSVolumeRecommendationsRequest;
      output: GetEBSVolumeRecommendationsResponse;
    };
    sdk: {
      input: GetEBSVolumeRecommendationsCommandInput;
      output: GetEBSVolumeRecommendationsCommandOutput;
    };
  };
}
