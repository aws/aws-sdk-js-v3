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
import type {
  GetLambdaFunctionRecommendationsRequest,
  GetLambdaFunctionRecommendationsResponse,
} from "../models/models_0";
import { GetLambdaFunctionRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLambdaFunctionRecommendationsCommand}.
 */
export interface GetLambdaFunctionRecommendationsCommandInput extends GetLambdaFunctionRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetLambdaFunctionRecommendationsCommand}.
 */
export interface GetLambdaFunctionRecommendationsCommandOutput
  extends GetLambdaFunctionRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns Lambda function recommendations.</p>
 *          <p>Compute Optimizer generates recommendations for functions that meet a specific set
 *             of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>Compute Optimizer User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetLambdaFunctionRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetLambdaFunctionRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetLambdaFunctionRecommendationsRequest
 *   functionArns: [ // FunctionArns
 *     "STRING_VALUE",
 *   ],
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // LambdaFunctionRecommendationFilters
 *     { // LambdaFunctionRecommendationFilter
 *       name: "Finding" || "FindingReasonCode",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetLambdaFunctionRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetLambdaFunctionRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   lambdaFunctionRecommendations: [ // LambdaFunctionRecommendations
 * //     { // LambdaFunctionRecommendation
 * //       functionArn: "STRING_VALUE",
 * //       functionVersion: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       currentMemorySize: Number("int"),
 * //       numberOfInvocations: Number("long"),
 * //       utilizationMetrics: [ // LambdaFunctionUtilizationMetrics
 * //         { // LambdaFunctionUtilizationMetric
 * //           name: "Duration" || "Memory",
 * //           statistic: "Maximum" || "Average",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       lookbackPeriodInDays: Number("double"),
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //       finding: "Optimized" || "NotOptimized" || "Unavailable",
 * //       findingReasonCodes: [ // LambdaFunctionRecommendationFindingReasonCodes
 * //         "MemoryOverprovisioned" || "MemoryUnderprovisioned" || "InsufficientData" || "Inconclusive",
 * //       ],
 * //       memorySizeRecommendationOptions: [ // LambdaFunctionMemoryRecommendationOptions
 * //         { // LambdaFunctionMemoryRecommendationOption
 * //           rank: Number("int"),
 * //           memorySize: Number("int"),
 * //           projectedUtilizationMetrics: [ // LambdaFunctionMemoryProjectedMetrics
 * //             { // LambdaFunctionMemoryProjectedMetric
 * //               name: "Duration",
 * //               statistic: "LowerBound" || "UpperBound" || "Expected",
 * //               value: Number("double"),
 * //             },
 * //           ],
 * //           savingsOpportunity: { // SavingsOpportunity
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //           savingsOpportunityAfterDiscounts: { // LambdaSavingsOpportunityAfterDiscounts
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // LambdaEstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       currentPerformanceRisk: "VeryLow" || "Low" || "Medium" || "High",
 * //       effectiveRecommendationPreferences: { // LambdaEffectiveRecommendationPreferences
 * //         savingsEstimationMode: { // LambdaSavingsEstimationMode
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
 * // };
 *
 * ```
 *
 * @param GetLambdaFunctionRecommendationsCommandInput - {@link GetLambdaFunctionRecommendationsCommandInput}
 * @returns {@link GetLambdaFunctionRecommendationsCommandOutput}
 * @see {@link GetLambdaFunctionRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetLambdaFunctionRecommendationsCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds a limit of the service.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
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
export class GetLambdaFunctionRecommendationsCommand extends $Command
  .classBuilder<
    GetLambdaFunctionRecommendationsCommandInput,
    GetLambdaFunctionRecommendationsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "GetLambdaFunctionRecommendations", {})
  .n("ComputeOptimizerClient", "GetLambdaFunctionRecommendationsCommand")
  .sc(GetLambdaFunctionRecommendations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLambdaFunctionRecommendationsRequest;
      output: GetLambdaFunctionRecommendationsResponse;
    };
    sdk: {
      input: GetLambdaFunctionRecommendationsCommandInput;
      output: GetLambdaFunctionRecommendationsCommandOutput;
    };
  };
}
