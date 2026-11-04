// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetLambdaFunctionRecommendationsRequest,
  GetLambdaFunctionRecommendationsResponse,
} from "../models/models_0";
import { GetLambdaFunctionRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetLambdaFunctionRecommendationsCommandOutput extends GetLambdaFunctionRecommendationsResponse, __MetadataBearer {}

/**
 * Returns Lambda function recommendations.
 *
 * Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the [Supported resources and requirements](https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html) in the *Compute Optimizer User Guide*.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Try your call again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value supplied for the input parameter is out of range or not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeds a limit of the service.
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *
 * The request must contain either a valid (registered) Amazon Web Services access key ID or X.509 certificate.
 *
 * @throws {@link OptInRequiredException} (client fault)
 *
 * The account is not opted in to Compute Optimizer.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed due to a temporary failure of the server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ComputeOptimizerServiceException}
 *
 * Base exception class for all service exceptions from ComputeOptimizer service.
 *
 * @public
 */
export class GetLambdaFunctionRecommendationsCommand extends command<GetLambdaFunctionRecommendationsCommandInput, GetLambdaFunctionRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "GetLambdaFunctionRecommendations",
  GetLambdaFunctionRecommendations$
) {
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
