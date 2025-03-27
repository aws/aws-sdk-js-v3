// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRDSDatabaseRecommendationsRequest, GetRDSDatabaseRecommendationsResponse } from "../models/models_0";
import {
  de_GetRDSDatabaseRecommendationsCommand,
  se_GetRDSDatabaseRecommendationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRDSDatabaseRecommendationsCommand}.
 */
export interface GetRDSDatabaseRecommendationsCommandInput extends GetRDSDatabaseRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRDSDatabaseRecommendationsCommand}.
 */
export interface GetRDSDatabaseRecommendationsCommandOutput
  extends GetRDSDatabaseRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Returns Amazon RDS recommendations.
 *         </p>
 *          <p>Compute Optimizer generates recommendations for Amazon RDS that
 *             meet a specific set of requirements. For more
 *             information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>Compute Optimizer User
 *                     Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetRDSDatabaseRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetRDSDatabaseRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetRDSDatabaseRecommendationsRequest
 *   resourceArns: [ // ResourceArns
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // RDSDBRecommendationFilters
 *     { // RDSDBRecommendationFilter
 *       name: "InstanceFinding" || "InstanceFindingReasonCode" || "StorageFinding" || "StorageFindingReasonCode" || "Idle",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   recommendationPreferences: { // RecommendationPreferences
 *     cpuVendorArchitectures: [ // CpuVendorArchitectures
 *       "AWS_ARM64" || "CURRENT",
 *     ],
 *   },
 * };
 * const command = new GetRDSDatabaseRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRDSDatabaseRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   rdsDBRecommendations: [ // RDSDBRecommendations
 * //     { // RDSDBRecommendation
 * //       resourceArn: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       engine: "STRING_VALUE",
 * //       engineVersion: "STRING_VALUE",
 * //       promotionTier: Number("int"),
 * //       currentDBInstanceClass: "STRING_VALUE",
 * //       currentStorageConfiguration: { // DBStorageConfiguration
 * //         storageType: "STRING_VALUE",
 * //         allocatedStorage: Number("int"),
 * //         iops: Number("int"),
 * //         maxAllocatedStorage: Number("int"),
 * //         storageThroughput: Number("int"),
 * //       },
 * //       dbClusterIdentifier: "STRING_VALUE",
 * //       idle: "True" || "False",
 * //       instanceFinding: "Optimized" || "Underprovisioned" || "Overprovisioned",
 * //       storageFinding: "Optimized" || "Underprovisioned" || "Overprovisioned",
 * //       instanceFindingReasonCodes: [ // RDSInstanceFindingReasonCodes
 * //         "CPUOverprovisioned" || "NetworkBandwidthOverprovisioned" || "EBSIOPSOverprovisioned" || "EBSIOPSUnderprovisioned" || "EBSThroughputOverprovisioned" || "CPUUnderprovisioned" || "NetworkBandwidthUnderprovisioned" || "EBSThroughputUnderprovisioned" || "NewGenerationDBInstanceClassAvailable" || "NewEngineVersionAvailable" || "DBClusterWriterUnderprovisioned" || "MemoryUnderprovisioned" || "InstanceStorageReadIOPSUnderprovisioned" || "InstanceStorageWriteIOPSUnderprovisioned",
 * //       ],
 * //       currentInstancePerformanceRisk: "VeryLow" || "Low" || "Medium" || "High",
 * //       storageFindingReasonCodes: [ // RDSStorageFindingReasonCodes
 * //         "EBSVolumeAllocatedStorageUnderprovisioned" || "EBSVolumeThroughputUnderprovisioned" || "EBSVolumeIOPSOverprovisioned" || "EBSVolumeThroughputOverprovisioned" || "NewGenerationStorageTypeAvailable",
 * //       ],
 * //       instanceRecommendationOptions: [ // RDSDBInstanceRecommendationOptions
 * //         { // RDSDBInstanceRecommendationOption
 * //           dbInstanceClass: "STRING_VALUE",
 * //           projectedUtilizationMetrics: [ // RDSDBProjectedUtilizationMetrics
 * //             { // RDSDBUtilizationMetric
 * //               name: "CPU" || "Memory" || "EBSVolumeStorageSpaceUtilization" || "NetworkReceiveThroughput" || "NetworkTransmitThroughput" || "EBSVolumeReadIOPS" || "EBSVolumeWriteIOPS" || "EBSVolumeReadThroughput" || "EBSVolumeWriteThroughput" || "DatabaseConnections" || "StorageNetworkReceiveThroughput" || "StorageNetworkTransmitThroughput" || "AuroraMemoryHealthState" || "AuroraMemoryNumDeclinedSql" || "AuroraMemoryNumKillConnTotal" || "AuroraMemoryNumKillQueryTotal" || "ReadIOPSEphemeralStorage" || "WriteIOPSEphemeralStorage",
 * //               statistic: "Maximum" || "Minimum" || "Average",
 * //               value: Number("double"),
 * //             },
 * //           ],
 * //           performanceRisk: Number("double"),
 * //           rank: Number("int"),
 * //           savingsOpportunity: { // SavingsOpportunity
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //           savingsOpportunityAfterDiscounts: { // RDSInstanceSavingsOpportunityAfterDiscounts
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // RDSInstanceEstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       storageRecommendationOptions: [ // RDSDBStorageRecommendationOptions
 * //         { // RDSDBStorageRecommendationOption
 * //           storageConfiguration: {
 * //             storageType: "STRING_VALUE",
 * //             allocatedStorage: Number("int"),
 * //             iops: Number("int"),
 * //             maxAllocatedStorage: Number("int"),
 * //             storageThroughput: Number("int"),
 * //           },
 * //           rank: Number("int"),
 * //           savingsOpportunity: {
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: {
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //           savingsOpportunityAfterDiscounts: { // RDSStorageSavingsOpportunityAfterDiscounts
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // RDSStorageEstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       utilizationMetrics: [ // RDSDBUtilizationMetrics
 * //         {
 * //           name: "CPU" || "Memory" || "EBSVolumeStorageSpaceUtilization" || "NetworkReceiveThroughput" || "NetworkTransmitThroughput" || "EBSVolumeReadIOPS" || "EBSVolumeWriteIOPS" || "EBSVolumeReadThroughput" || "EBSVolumeWriteThroughput" || "DatabaseConnections" || "StorageNetworkReceiveThroughput" || "StorageNetworkTransmitThroughput" || "AuroraMemoryHealthState" || "AuroraMemoryNumDeclinedSql" || "AuroraMemoryNumKillConnTotal" || "AuroraMemoryNumKillQueryTotal" || "ReadIOPSEphemeralStorage" || "WriteIOPSEphemeralStorage",
 * //           statistic: "Maximum" || "Minimum" || "Average",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       effectiveRecommendationPreferences: { // RDSEffectiveRecommendationPreferences
 * //         cpuVendorArchitectures: [ // CpuVendorArchitectures
 * //           "AWS_ARM64" || "CURRENT",
 * //         ],
 * //         enhancedInfrastructureMetrics: "Active" || "Inactive",
 * //         lookBackPeriod: "DAYS_14" || "DAYS_32" || "DAYS_93",
 * //         savingsEstimationMode: { // RDSSavingsEstimationMode
 * //           source: "PublicPricing" || "CostExplorerRightsizing" || "CostOptimizationHub",
 * //         },
 * //       },
 * //       lookbackPeriodInDays: Number("double"),
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
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
 * @param GetRDSDatabaseRecommendationsCommandInput - {@link GetRDSDatabaseRecommendationsCommandInput}
 * @returns {@link GetRDSDatabaseRecommendationsCommandOutput}
 * @see {@link GetRDSDatabaseRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRDSDatabaseRecommendationsCommandOutput} for command's `response` shape.
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
export class GetRDSDatabaseRecommendationsCommand extends $Command
  .classBuilder<
    GetRDSDatabaseRecommendationsCommandInput,
    GetRDSDatabaseRecommendationsCommandOutput,
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
  .s("ComputeOptimizerService", "GetRDSDatabaseRecommendations", {})
  .n("ComputeOptimizerClient", "GetRDSDatabaseRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_GetRDSDatabaseRecommendationsCommand)
  .de(de_GetRDSDatabaseRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRDSDatabaseRecommendationsRequest;
      output: GetRDSDatabaseRecommendationsResponse;
    };
    sdk: {
      input: GetRDSDatabaseRecommendationsCommandInput;
      output: GetRDSDatabaseRecommendationsCommandOutput;
    };
  };
}
