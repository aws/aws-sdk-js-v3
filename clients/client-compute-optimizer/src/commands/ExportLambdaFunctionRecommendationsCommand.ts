// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ExportLambdaFunctionRecommendationsRequest,
  ExportLambdaFunctionRecommendationsResponse,
} from "../models/models_0";
import { ExportLambdaFunctionRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExportLambdaFunctionRecommendationsCommand}.
 */
export interface ExportLambdaFunctionRecommendationsCommandInput extends ExportLambdaFunctionRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ExportLambdaFunctionRecommendationsCommand}.
 */
export interface ExportLambdaFunctionRecommendationsCommandOutput extends ExportLambdaFunctionRecommendationsResponse, __MetadataBearer {}

/**
 * Exports optimization recommendations for Lambda functions.
 *
 * Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see [Exporting Recommendations](https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html) in the *Compute Optimizer User Guide*.
 *
 * You can have only one Lambda function export job in progress per Amazon Web Services Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportLambdaFunctionRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportLambdaFunctionRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // ExportLambdaFunctionRecommendationsRequest
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
 *   fieldsToExport: [ // ExportableLambdaFunctionFields
 *     "AccountId" || "FunctionArn" || "FunctionVersion" || "Finding" || "FindingReasonCodes" || "NumberOfInvocations" || "UtilizationMetricsDurationMaximum" || "UtilizationMetricsDurationAverage" || "UtilizationMetricsMemoryMaximum" || "UtilizationMetricsMemoryAverage" || "LookbackPeriodInDays" || "CurrentConfigurationMemorySize" || "CurrentConfigurationTimeout" || "CurrentCostTotal" || "CurrentCostAverage" || "RecommendationOptionsConfigurationMemorySize" || "RecommendationOptionsCostLow" || "RecommendationOptionsCostHigh" || "RecommendationOptionsProjectedUtilizationMetricsDurationLowerBound" || "RecommendationOptionsProjectedUtilizationMetricsDurationUpperBound" || "RecommendationOptionsProjectedUtilizationMetricsDurationExpected" || "LastRefreshTimestamp" || "CurrentPerformanceRisk" || "RecommendationOptionsSavingsOpportunityPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrency" || "RecommendationOptionsEstimatedMonthlySavingsValue" || "Tags" || "EffectiveRecommendationPreferencesSavingsEstimationMode" || "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts" || "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts",
 *   ],
 *   s3DestinationConfig: { // S3DestinationConfig
 *     bucket: "STRING_VALUE",
 *     keyPrefix: "STRING_VALUE",
 *   },
 *   fileFormat: "Csv",
 *   includeMemberAccounts: true || false,
 * };
 * const command = new ExportLambdaFunctionRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ExportLambdaFunctionRecommendationsResponse
 * //   jobId: "STRING_VALUE",
 * //   s3Destination: { // S3Destination
 * //     bucket: "STRING_VALUE",
 * //     key: "STRING_VALUE",
 * //     metadataKey: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportLambdaFunctionRecommendationsCommandInput - {@link ExportLambdaFunctionRecommendationsCommandInput}
 * @returns {@link ExportLambdaFunctionRecommendationsCommandOutput}
 * @see {@link ExportLambdaFunctionRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportLambdaFunctionRecommendationsCommandOutput} for command's `response` shape.
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
export class ExportLambdaFunctionRecommendationsCommand extends command<ExportLambdaFunctionRecommendationsCommandInput, ExportLambdaFunctionRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "ExportLambdaFunctionRecommendations",
  ExportLambdaFunctionRecommendations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportLambdaFunctionRecommendationsRequest;
      output: ExportLambdaFunctionRecommendationsResponse;
    };
    sdk: {
      input: ExportLambdaFunctionRecommendationsCommandInput;
      output: ExportLambdaFunctionRecommendationsCommandOutput;
    };
  };
}
