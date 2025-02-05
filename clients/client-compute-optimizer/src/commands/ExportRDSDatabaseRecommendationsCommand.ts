// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportRDSDatabaseRecommendationsRequest, ExportRDSDatabaseRecommendationsResponse } from "../models/models_0";
import {
  de_ExportRDSDatabaseRecommendationsCommand,
  se_ExportRDSDatabaseRecommendationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportRDSDatabaseRecommendationsCommand}.
 */
export interface ExportRDSDatabaseRecommendationsCommandInput extends ExportRDSDatabaseRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ExportRDSDatabaseRecommendationsCommand}.
 */
export interface ExportRDSDatabaseRecommendationsCommandOutput
  extends ExportRDSDatabaseRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Export optimization recommendations for your Amazon Relational Database Service (Amazon RDS).
 *         </p>
 *          <p>Recommendations are exported in a comma-separated values (CSV) file, and its metadata
 *             in a JavaScript Object Notation (JSON) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User
 *                     Guide</i>.</p>
 *          <p>You can have only one Amazon RDS export job in progress per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportRDSDatabaseRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportRDSDatabaseRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ComputeOptimizerClient(config);
 * const input = { // ExportRDSDatabaseRecommendationsRequest
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // RDSDBRecommendationFilters
 *     { // RDSDBRecommendationFilter
 *       name: "InstanceFinding" || "InstanceFindingReasonCode" || "StorageFinding" || "StorageFindingReasonCode" || "Idle",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   fieldsToExport: [ // ExportableRDSDBFields
 *     "ResourceArn" || "AccountId" || "Engine" || "EngineVersion" || "Idle" || "MultiAZDBInstance" || "CurrentDBInstanceClass" || "CurrentStorageConfigurationStorageType" || "CurrentStorageConfigurationAllocatedStorage" || "CurrentStorageConfigurationMaxAllocatedStorage" || "CurrentStorageConfigurationIOPS" || "CurrentStorageConfigurationStorageThroughput" || "CurrentInstanceOnDemandHourlyPrice" || "CurrentStorageOnDemandMonthlyPrice" || "LookbackPeriodInDays" || "CurrentInstancePerformanceRisk" || "UtilizationMetricsCpuMaximum" || "UtilizationMetricsMemoryMaximum" || "UtilizationMetricsEBSVolumeStorageSpaceUtilizationMaximum" || "UtilizationMetricsNetworkReceiveThroughputMaximum" || "UtilizationMetricsNetworkTransmitThroughputMaximum" || "UtilizationMetricsEBSVolumeReadIOPSMaximum" || "UtilizationMetricsEBSVolumeWriteIOPSMaximum" || "UtilizationMetricsEBSVolumeReadThroughputMaximum" || "UtilizationMetricsEBSVolumeWriteThroughputMaximum" || "UtilizationMetricsDatabaseConnectionsMaximum" || "UtilizationMetricsStorageNetworkReceiveThroughputMaximum" || "UtilizationMetricsStorageNetworkTransmitThroughputMaximum" || "UtilizationMetricsAuroraMemoryHealthStateMaximum" || "UtilizationMetricsAuroraMemoryNumDeclinedSqlTotalMaximum" || "UtilizationMetricsAuroraMemoryNumKillConnTotalMaximum" || "UtilizationMetricsAuroraMemoryNumKillQueryTotalMaximum" || "UtilizationMetricsReadIOPSEphemeralStorageMaximum" || "UtilizationMetricsWriteIOPSEphemeralStorageMaximum" || "InstanceFinding" || "InstanceFindingReasonCodes" || "StorageFinding" || "StorageFindingReasonCodes" || "InstanceRecommendationOptionsDBInstanceClass" || "InstanceRecommendationOptionsRank" || "InstanceRecommendationOptionsPerformanceRisk" || "InstanceRecommendationOptionsProjectedUtilizationMetricsCpuMaximum" || "StorageRecommendationOptionsStorageType" || "StorageRecommendationOptionsAllocatedStorage" || "StorageRecommendationOptionsMaxAllocatedStorage" || "StorageRecommendationOptionsIOPS" || "StorageRecommendationOptionsStorageThroughput" || "StorageRecommendationOptionsRank" || "InstanceRecommendationOptionsInstanceOnDemandHourlyPrice" || "InstanceRecommendationOptionsSavingsOpportunityPercentage" || "InstanceRecommendationOptionsEstimatedMonthlySavingsCurrency" || "InstanceRecommendationOptionsEstimatedMonthlySavingsValue" || "InstanceRecommendationOptionsSavingsOpportunityAfterDiscountsPercentage" || "InstanceRecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts" || "InstanceRecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts" || "StorageRecommendationOptionsOnDemandMonthlyPrice" || "StorageRecommendationOptionsSavingsOpportunityPercentage" || "StorageRecommendationOptionsEstimatedMonthlySavingsCurrency" || "StorageRecommendationOptionsEstimatedMonthlySavingsValue" || "StorageRecommendationOptionsSavingsOpportunityAfterDiscountsPercentage" || "StorageRecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts" || "StorageRecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts" || "EffectiveRecommendationPreferencesCpuVendorArchitectures" || "EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics" || "EffectiveRecommendationPreferencesLookBackPeriod" || "EffectiveRecommendationPreferencesSavingsEstimationMode" || "LastRefreshTimestamp" || "Tags" || "DBClusterIdentifier" || "PromotionTier",
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
 * const command = new ExportRDSDatabaseRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ExportRDSDatabaseRecommendationsResponse
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
 * @param ExportRDSDatabaseRecommendationsCommandInput - {@link ExportRDSDatabaseRecommendationsCommandInput}
 * @returns {@link ExportRDSDatabaseRecommendationsCommandOutput}
 * @see {@link ExportRDSDatabaseRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportRDSDatabaseRecommendationsCommandOutput} for command's `response` shape.
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
export class ExportRDSDatabaseRecommendationsCommand extends $Command
  .classBuilder<
    ExportRDSDatabaseRecommendationsCommandInput,
    ExportRDSDatabaseRecommendationsCommandOutput,
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
  .s("ComputeOptimizerService", "ExportRDSDatabaseRecommendations", {})
  .n("ComputeOptimizerClient", "ExportRDSDatabaseRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_ExportRDSDatabaseRecommendationsCommand)
  .de(de_ExportRDSDatabaseRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportRDSDatabaseRecommendationsRequest;
      output: ExportRDSDatabaseRecommendationsResponse;
    };
    sdk: {
      input: ExportRDSDatabaseRecommendationsCommandInput;
      output: ExportRDSDatabaseRecommendationsCommandOutput;
    };
  };
}
