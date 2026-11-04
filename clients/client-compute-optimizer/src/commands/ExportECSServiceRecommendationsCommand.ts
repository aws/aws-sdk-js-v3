// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ExportECSServiceRecommendationsRequest,
  ExportECSServiceRecommendationsResponse,
} from "../models/models_0";
import { ExportECSServiceRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExportECSServiceRecommendationsCommand}.
 */
export interface ExportECSServiceRecommendationsCommandInput extends ExportECSServiceRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ExportECSServiceRecommendationsCommand}.
 */
export interface ExportECSServiceRecommendationsCommandOutput extends ExportECSServiceRecommendationsResponse, __MetadataBearer {}

/**
 * Exports optimization recommendations for Amazon ECS services on Fargate.
 *
 * Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see [Exporting Recommendations](https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html) in the *Compute Optimizer User Guide*.
 *
 * You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportECSServiceRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportECSServiceRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // ExportECSServiceRecommendationsRequest
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // ECSServiceRecommendationFilters
 *     { // ECSServiceRecommendationFilter
 *       name: "Finding" || "FindingReasonCode",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   fieldsToExport: [ // ExportableECSServiceFields
 *     "AccountId" || "ServiceArn" || "LookbackPeriodInDays" || "LastRefreshTimestamp" || "LaunchType" || "CurrentPerformanceRisk" || "CurrentServiceConfigurationMemory" || "CurrentServiceConfigurationCpu" || "CurrentServiceConfigurationTaskDefinitionArn" || "CurrentServiceConfigurationAutoScalingConfiguration" || "CurrentServiceContainerConfigurations" || "UtilizationMetricsCpuMaximum" || "UtilizationMetricsMemoryMaximum" || "Finding" || "FindingReasonCodes" || "RecommendationOptionsMemory" || "RecommendationOptionsCpu" || "RecommendationOptionsSavingsOpportunityPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrency" || "RecommendationOptionsEstimatedMonthlySavingsValue" || "RecommendationOptionsContainerRecommendations" || "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum" || "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum" || "Tags" || "EffectiveRecommendationPreferencesSavingsEstimationMode" || "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts" || "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts" || "EffectiveRecommendationPreferencesLookBackPeriod",
 *   ],
 *   s3DestinationConfig: { // S3DestinationConfig
 *     bucket: "STRING_VALUE",
 *     keyPrefix: "STRING_VALUE",
 *   },
 *   fileFormat: "Csv",
 *   includeMemberAccounts: true || false,
 * };
 * const command = new ExportECSServiceRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ExportECSServiceRecommendationsResponse
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
 * @param ExportECSServiceRecommendationsCommandInput - {@link ExportECSServiceRecommendationsCommandInput}
 * @returns {@link ExportECSServiceRecommendationsCommandOutput}
 * @see {@link ExportECSServiceRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportECSServiceRecommendationsCommandOutput} for command's `response` shape.
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
export class ExportECSServiceRecommendationsCommand extends command<ExportECSServiceRecommendationsCommandInput, ExportECSServiceRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "ExportECSServiceRecommendations",
  ExportECSServiceRecommendations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportECSServiceRecommendationsRequest;
      output: ExportECSServiceRecommendationsResponse;
    };
    sdk: {
      input: ExportECSServiceRecommendationsCommandInput;
      output: ExportECSServiceRecommendationsCommandOutput;
    };
  };
}
