// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ComputeOptimizerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetECSServiceRecommendationsRequest, GetECSServiceRecommendationsResponse } from "../models/models_0";
import { GetECSServiceRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetECSServiceRecommendationsCommand}.
 */
export interface GetECSServiceRecommendationsCommandInput extends GetECSServiceRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetECSServiceRecommendationsCommand}.
 */
export interface GetECSServiceRecommendationsCommandOutput extends GetECSServiceRecommendationsResponse, __MetadataBearer {}

/**
 * <p>
 *             Returns Amazon ECS service recommendations.
 *         </p>
 *          <p>
 *             Compute Optimizer generates recommendations for Amazon ECS services on
 *             Fargate that meet a specific set of requirements. For more
 *             information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>Compute Optimizer User
 *                     Guide</i>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetECSServiceRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetECSServiceRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetECSServiceRecommendationsRequest
 *   serviceArns: [ // ServiceArns
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // ECSServiceRecommendationFilters
 *     { // ECSServiceRecommendationFilter
 *       name: "Finding" || "FindingReasonCode",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetECSServiceRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetECSServiceRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   ecsServiceRecommendations: [ // ECSServiceRecommendations
 * //     { // ECSServiceRecommendation
 * //       serviceArn: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       currentServiceConfiguration: { // ServiceConfiguration
 * //         memory: Number("int"),
 * //         cpu: Number("int"),
 * //         containerConfigurations: [ // ContainerConfigurations
 * //           { // ContainerConfiguration
 * //             containerName: "STRING_VALUE",
 * //             memorySizeConfiguration: { // MemorySizeConfiguration
 * //               memory: Number("int"),
 * //               memoryReservation: Number("int"),
 * //             },
 * //             cpu: Number("int"),
 * //           },
 * //         ],
 * //         autoScalingConfiguration: "TargetTrackingScalingCpu" || "TargetTrackingScalingMemory",
 * //         taskDefinitionArn: "STRING_VALUE",
 * //       },
 * //       utilizationMetrics: [ // ECSServiceUtilizationMetrics
 * //         { // ECSServiceUtilizationMetric
 * //           name: "Cpu" || "Memory",
 * //           statistic: "Maximum" || "Average",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       lookbackPeriodInDays: Number("double"),
 * //       launchType: "EC2" || "Fargate",
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //       finding: "Optimized" || "Underprovisioned" || "Overprovisioned",
 * //       findingReasonCodes: [ // ECSServiceRecommendationFindingReasonCodes
 * //         "MemoryOverprovisioned" || "MemoryUnderprovisioned" || "CPUOverprovisioned" || "CPUUnderprovisioned",
 * //       ],
 * //       serviceRecommendationOptions: [ // ECSServiceRecommendationOptions
 * //         { // ECSServiceRecommendationOption
 * //           memory: Number("int"),
 * //           cpu: Number("int"),
 * //           savingsOpportunity: { // SavingsOpportunity
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //           savingsOpportunityAfterDiscounts: { // ECSSavingsOpportunityAfterDiscounts
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // ECSEstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //           projectedUtilizationMetrics: [ // ECSServiceProjectedUtilizationMetrics
 * //             { // ECSServiceProjectedUtilizationMetric
 * //               name: "Cpu" || "Memory",
 * //               statistic: "Maximum" || "Average",
 * //               lowerBoundValue: Number("double"),
 * //               upperBoundValue: Number("double"),
 * //             },
 * //           ],
 * //           containerRecommendations: [ // ContainerRecommendations
 * //             { // ContainerRecommendation
 * //               containerName: "STRING_VALUE",
 * //               memorySizeConfiguration: {
 * //                 memory: Number("int"),
 * //                 memoryReservation: Number("int"),
 * //               },
 * //               cpu: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       currentPerformanceRisk: "VeryLow" || "Low" || "Medium" || "High",
 * //       effectiveRecommendationPreferences: { // ECSEffectiveRecommendationPreferences
 * //         savingsEstimationMode: { // ECSSavingsEstimationMode
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
 * @param GetECSServiceRecommendationsCommandInput - {@link GetECSServiceRecommendationsCommandInput}
 * @returns {@link GetECSServiceRecommendationsCommandOutput}
 * @see {@link GetECSServiceRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetECSServiceRecommendationsCommandOutput} for command's `response` shape.
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
export class GetECSServiceRecommendationsCommand extends $Command
  .classBuilder<
    GetECSServiceRecommendationsCommandInput,
    GetECSServiceRecommendationsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "GetECSServiceRecommendations", {})
  .n("ComputeOptimizerClient", "GetECSServiceRecommendationsCommand")
  .sc(GetECSServiceRecommendations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetECSServiceRecommendationsRequest;
      output: GetECSServiceRecommendationsResponse;
    };
    sdk: {
      input: GetECSServiceRecommendationsCommandInput;
      output: GetECSServiceRecommendationsCommandOutput;
    };
  };
}
