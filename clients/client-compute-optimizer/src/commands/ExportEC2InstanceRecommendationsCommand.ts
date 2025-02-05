// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportEC2InstanceRecommendationsRequest, ExportEC2InstanceRecommendationsResponse } from "../models/models_0";
import {
  de_ExportEC2InstanceRecommendationsCommand,
  se_ExportEC2InstanceRecommendationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportEC2InstanceRecommendationsCommand}.
 */
export interface ExportEC2InstanceRecommendationsCommandInput extends ExportEC2InstanceRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ExportEC2InstanceRecommendationsCommand}.
 */
export interface ExportEC2InstanceRecommendationsCommandOutput
  extends ExportEC2InstanceRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Exports optimization recommendations for Amazon EC2 instances.</p>
 *          <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User
 *             Guide</i>.</p>
 *          <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportEC2InstanceRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportEC2InstanceRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ComputeOptimizerClient(config);
 * const input = { // ExportEC2InstanceRecommendationsRequest
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
 *   fieldsToExport: [ // ExportableInstanceFields
 *     "AccountId" || "InstanceArn" || "InstanceName" || "Finding" || "FindingReasonCodes" || "LookbackPeriodInDays" || "CurrentInstanceType" || "UtilizationMetricsCpuMaximum" || "UtilizationMetricsMemoryMaximum" || "UtilizationMetricsEbsReadOpsPerSecondMaximum" || "UtilizationMetricsEbsWriteOpsPerSecondMaximum" || "UtilizationMetricsEbsReadBytesPerSecondMaximum" || "UtilizationMetricsEbsWriteBytesPerSecondMaximum" || "UtilizationMetricsDiskReadOpsPerSecondMaximum" || "UtilizationMetricsDiskWriteOpsPerSecondMaximum" || "UtilizationMetricsDiskReadBytesPerSecondMaximum" || "UtilizationMetricsDiskWriteBytesPerSecondMaximum" || "UtilizationMetricsNetworkInBytesPerSecondMaximum" || "UtilizationMetricsNetworkOutBytesPerSecondMaximum" || "UtilizationMetricsNetworkPacketsInPerSecondMaximum" || "UtilizationMetricsNetworkPacketsOutPerSecondMaximum" || "CurrentOnDemandPrice" || "CurrentStandardOneYearNoUpfrontReservedPrice" || "CurrentStandardThreeYearNoUpfrontReservedPrice" || "CurrentVCpus" || "CurrentMemory" || "CurrentStorage" || "CurrentNetwork" || "RecommendationOptionsInstanceType" || "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum" || "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum" || "RecommendationOptionsPlatformDifferences" || "RecommendationOptionsPerformanceRisk" || "RecommendationOptionsVcpus" || "RecommendationOptionsMemory" || "RecommendationOptionsStorage" || "RecommendationOptionsNetwork" || "RecommendationOptionsOnDemandPrice" || "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice" || "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice" || "RecommendationsSourcesRecommendationSourceArn" || "RecommendationsSourcesRecommendationSourceType" || "LastRefreshTimestamp" || "CurrentPerformanceRisk" || "RecommendationOptionsSavingsOpportunityPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrency" || "RecommendationOptionsEstimatedMonthlySavingsValue" || "EffectiveRecommendationPreferencesCpuVendorArchitectures" || "EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics" || "EffectiveRecommendationPreferencesInferredWorkloadTypes" || "InferredWorkloadTypes" || "RecommendationOptionsMigrationEffort" || "EffectiveRecommendationPreferencesExternalMetricsSource" || "Tags" || "InstanceState" || "ExternalMetricStatusCode" || "ExternalMetricStatusReason" || "CurrentInstanceGpuInfo" || "RecommendationOptionsInstanceGpuInfo" || "UtilizationMetricsGpuPercentageMaximum" || "UtilizationMetricsGpuMemoryPercentageMaximum" || "RecommendationOptionsProjectedUtilizationMetricsGpuPercentageMaximum" || "RecommendationOptionsProjectedUtilizationMetricsGpuMemoryPercentageMaximum" || "Idle" || "EffectiveRecommendationPreferencesPreferredResources" || "EffectiveRecommendationPreferencesLookBackPeriod" || "EffectiveRecommendationPreferencesUtilizationPreferences" || "EffectiveRecommendationPreferencesSavingsEstimationMode" || "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts" || "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts",
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
 * const command = new ExportEC2InstanceRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ExportEC2InstanceRecommendationsResponse
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
 * @param ExportEC2InstanceRecommendationsCommandInput - {@link ExportEC2InstanceRecommendationsCommandInput}
 * @returns {@link ExportEC2InstanceRecommendationsCommandOutput}
 * @see {@link ExportEC2InstanceRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportEC2InstanceRecommendationsCommandOutput} for command's `response` shape.
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
export class ExportEC2InstanceRecommendationsCommand extends $Command
  .classBuilder<
    ExportEC2InstanceRecommendationsCommandInput,
    ExportEC2InstanceRecommendationsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComputeOptimizerService", "ExportEC2InstanceRecommendations", {})
  .n("ComputeOptimizerClient", "ExportEC2InstanceRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_ExportEC2InstanceRecommendationsCommand)
  .de(de_ExportEC2InstanceRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportEC2InstanceRecommendationsRequest;
      output: ExportEC2InstanceRecommendationsResponse;
    };
    sdk: {
      input: ExportEC2InstanceRecommendationsCommandInput;
      output: ExportEC2InstanceRecommendationsCommandOutput;
    };
  };
}
