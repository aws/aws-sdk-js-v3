// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ExportAutoScalingGroupRecommendationsRequest,
  ExportAutoScalingGroupRecommendationsResponse,
} from "../models/models_0";
import {
  de_ExportAutoScalingGroupRecommendationsCommand,
  se_ExportAutoScalingGroupRecommendationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportAutoScalingGroupRecommendationsCommand}.
 */
export interface ExportAutoScalingGroupRecommendationsCommandInput
  extends ExportAutoScalingGroupRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ExportAutoScalingGroupRecommendationsCommand}.
 */
export interface ExportAutoScalingGroupRecommendationsCommandOutput
  extends ExportAutoScalingGroupRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Exports optimization recommendations for Auto Scaling groups.</p>
 *          <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User
 *             Guide</i>.</p>
 *          <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportAutoScalingGroupRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportAutoScalingGroupRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = { // ExportAutoScalingGroupRecommendationsRequest
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // Filters
 *     { // Filter
 *       name: "Finding" || "FindingReasonCodes" || "RecommendationSourceType" || "InferredWorkloadTypes",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   fieldsToExport: [ // ExportableAutoScalingGroupFields
 *     "AccountId" || "AutoScalingGroupArn" || "AutoScalingGroupName" || "Finding" || "UtilizationMetricsCpuMaximum" || "UtilizationMetricsMemoryMaximum" || "UtilizationMetricsEbsReadOpsPerSecondMaximum" || "UtilizationMetricsEbsWriteOpsPerSecondMaximum" || "UtilizationMetricsEbsReadBytesPerSecondMaximum" || "UtilizationMetricsEbsWriteBytesPerSecondMaximum" || "UtilizationMetricsDiskReadOpsPerSecondMaximum" || "UtilizationMetricsDiskWriteOpsPerSecondMaximum" || "UtilizationMetricsDiskReadBytesPerSecondMaximum" || "UtilizationMetricsDiskWriteBytesPerSecondMaximum" || "UtilizationMetricsNetworkInBytesPerSecondMaximum" || "UtilizationMetricsNetworkOutBytesPerSecondMaximum" || "UtilizationMetricsNetworkPacketsInPerSecondMaximum" || "UtilizationMetricsNetworkPacketsOutPerSecondMaximum" || "LookbackPeriodInDays" || "CurrentConfigurationInstanceType" || "CurrentConfigurationDesiredCapacity" || "CurrentConfigurationMinSize" || "CurrentConfigurationMaxSize" || "CurrentOnDemandPrice" || "CurrentStandardOneYearNoUpfrontReservedPrice" || "CurrentStandardThreeYearNoUpfrontReservedPrice" || "CurrentVCpus" || "CurrentMemory" || "CurrentStorage" || "CurrentNetwork" || "RecommendationOptionsConfigurationInstanceType" || "RecommendationOptionsConfigurationDesiredCapacity" || "RecommendationOptionsConfigurationMinSize" || "RecommendationOptionsConfigurationMaxSize" || "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum" || "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum" || "RecommendationOptionsPerformanceRisk" || "RecommendationOptionsOnDemandPrice" || "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice" || "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice" || "RecommendationOptionsVcpus" || "RecommendationOptionsMemory" || "RecommendationOptionsStorage" || "RecommendationOptionsNetwork" || "LastRefreshTimestamp" || "CurrentPerformanceRisk" || "RecommendationOptionsSavingsOpportunityPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrency" || "RecommendationOptionsEstimatedMonthlySavingsValue" || "EffectiveRecommendationPreferencesCpuVendorArchitectures" || "EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics" || "EffectiveRecommendationPreferencesInferredWorkloadTypes" || "InferredWorkloadTypes" || "RecommendationOptionsMigrationEffort" || "CurrentInstanceGpuInfo" || "RecommendationOptionsInstanceGpuInfo" || "UtilizationMetricsGpuPercentageMaximum" || "UtilizationMetricsGpuMemoryPercentageMaximum" || "RecommendationOptionsProjectedUtilizationMetricsGpuPercentageMaximum" || "RecommendationOptionsProjectedUtilizationMetricsGpuMemoryPercentageMaximum" || "EffectiveRecommendationPreferencesSavingsEstimationMode" || "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts" || "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts" || "EffectiveRecommendationPreferencesPreferredResources" || "EffectiveRecommendationPreferencesLookBackPeriod",
 *   ],
 *   s3DestinationConfig: { // S3DestinationConfig
 *     bucket: "STRING_VALUE",
 *     keyPrefix: "STRING_VALUE",
 *   },
 *   fileFormat: "Csv",
 *   includeMemberAccounts: true || false,
 *   recommendationPreferences: { // RecommendationPreferences
 *     cpuVendorArchitectures: [ // CpuVendorArchitectures
 *       "AWS_ARM64" || "CURRENT",
 *     ],
 *   },
 * };
 * const command = new ExportAutoScalingGroupRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ExportAutoScalingGroupRecommendationsResponse
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
 * @param ExportAutoScalingGroupRecommendationsCommandInput - {@link ExportAutoScalingGroupRecommendationsCommandInput}
 * @returns {@link ExportAutoScalingGroupRecommendationsCommandOutput}
 * @see {@link ExportAutoScalingGroupRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportAutoScalingGroupRecommendationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ExportAutoScalingGroupRecommendationsCommand extends $Command
  .classBuilder<
    ExportAutoScalingGroupRecommendationsCommandInput,
    ExportAutoScalingGroupRecommendationsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComputeOptimizerService", "ExportAutoScalingGroupRecommendations", {})
  .n("ComputeOptimizerClient", "ExportAutoScalingGroupRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_ExportAutoScalingGroupRecommendationsCommand)
  .de(de_ExportAutoScalingGroupRecommendationsCommand)
  .build() {}
