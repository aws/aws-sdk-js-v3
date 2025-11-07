// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEC2InstanceRecommendationsRequest, GetEC2InstanceRecommendationsResponse } from "../models/models_0";
import { GetEC2InstanceRecommendations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEC2InstanceRecommendationsCommand}.
 */
export interface GetEC2InstanceRecommendationsCommandInput extends GetEC2InstanceRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetEC2InstanceRecommendationsCommand}.
 */
export interface GetEC2InstanceRecommendationsCommandOutput
  extends GetEC2InstanceRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns Amazon EC2 instance recommendations.</p>
 *          <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more
 *             information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>Compute Optimizer User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEC2InstanceRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEC2InstanceRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetEC2InstanceRecommendationsRequest
 *   instanceArns: [ // InstanceArns
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // Filters
 *     { // Filter
 *       name: "Finding" || "FindingReasonCodes" || "RecommendationSourceType" || "InferredWorkloadTypes",
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
 * const command = new GetEC2InstanceRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetEC2InstanceRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   instanceRecommendations: [ // InstanceRecommendations
 * //     { // InstanceRecommendation
 * //       instanceArn: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       instanceName: "STRING_VALUE",
 * //       currentInstanceType: "STRING_VALUE",
 * //       finding: "Underprovisioned" || "Overprovisioned" || "Optimized" || "NotOptimized",
 * //       findingReasonCodes: [ // InstanceRecommendationFindingReasonCodes
 * //         "CPUOverprovisioned" || "CPUUnderprovisioned" || "MemoryOverprovisioned" || "MemoryUnderprovisioned" || "EBSThroughputOverprovisioned" || "EBSThroughputUnderprovisioned" || "EBSIOPSOverprovisioned" || "EBSIOPSUnderprovisioned" || "NetworkBandwidthOverprovisioned" || "NetworkBandwidthUnderprovisioned" || "NetworkPPSOverprovisioned" || "NetworkPPSUnderprovisioned" || "DiskIOPSOverprovisioned" || "DiskIOPSUnderprovisioned" || "DiskThroughputOverprovisioned" || "DiskThroughputUnderprovisioned" || "GPUUnderprovisioned" || "GPUOverprovisioned" || "GPUMemoryUnderprovisioned" || "GPUMemoryOverprovisioned",
 * //       ],
 * //       utilizationMetrics: [ // UtilizationMetrics
 * //         { // UtilizationMetric
 * //           name: "Cpu" || "Memory" || "EBS_READ_OPS_PER_SECOND" || "EBS_WRITE_OPS_PER_SECOND" || "EBS_READ_BYTES_PER_SECOND" || "EBS_WRITE_BYTES_PER_SECOND" || "DISK_READ_OPS_PER_SECOND" || "DISK_WRITE_OPS_PER_SECOND" || "DISK_READ_BYTES_PER_SECOND" || "DISK_WRITE_BYTES_PER_SECOND" || "NETWORK_IN_BYTES_PER_SECOND" || "NETWORK_OUT_BYTES_PER_SECOND" || "NETWORK_PACKETS_IN_PER_SECOND" || "NETWORK_PACKETS_OUT_PER_SECOND" || "GPU_PERCENTAGE" || "GPU_MEMORY_PERCENTAGE",
 * //           statistic: "Maximum" || "Average",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       lookBackPeriodInDays: Number("double"),
 * //       recommendationOptions: [ // RecommendationOptions
 * //         { // InstanceRecommendationOption
 * //           instanceType: "STRING_VALUE",
 * //           instanceGpuInfo: { // GpuInfo
 * //             gpus: [ // Gpus
 * //               { // Gpu
 * //                 gpuCount: Number("int"),
 * //                 gpuMemorySizeInMiB: Number("int"),
 * //               },
 * //             ],
 * //           },
 * //           projectedUtilizationMetrics: [ // ProjectedUtilizationMetrics
 * //             {
 * //               name: "Cpu" || "Memory" || "EBS_READ_OPS_PER_SECOND" || "EBS_WRITE_OPS_PER_SECOND" || "EBS_READ_BYTES_PER_SECOND" || "EBS_WRITE_BYTES_PER_SECOND" || "DISK_READ_OPS_PER_SECOND" || "DISK_WRITE_OPS_PER_SECOND" || "DISK_READ_BYTES_PER_SECOND" || "DISK_WRITE_BYTES_PER_SECOND" || "NETWORK_IN_BYTES_PER_SECOND" || "NETWORK_OUT_BYTES_PER_SECOND" || "NETWORK_PACKETS_IN_PER_SECOND" || "NETWORK_PACKETS_OUT_PER_SECOND" || "GPU_PERCENTAGE" || "GPU_MEMORY_PERCENTAGE",
 * //               statistic: "Maximum" || "Average",
 * //               value: Number("double"),
 * //             },
 * //           ],
 * //           platformDifferences: [ // PlatformDifferences
 * //             "Hypervisor" || "NetworkInterface" || "StorageInterface" || "InstanceStoreAvailability" || "VirtualizationType" || "Architecture",
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
 * //           savingsOpportunityAfterDiscounts: { // InstanceSavingsOpportunityAfterDiscounts
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // InstanceEstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //           migrationEffort: "VeryLow" || "Low" || "Medium" || "High",
 * //         },
 * //       ],
 * //       recommendationSources: [ // RecommendationSources
 * //         { // RecommendationSource
 * //           recommendationSourceArn: "STRING_VALUE",
 * //           recommendationSourceType: "Ec2Instance" || "AutoScalingGroup" || "EbsVolume" || "LambdaFunction" || "EcsService" || "License" || "RdsDBInstance" || "RdsDBInstanceStorage" || "AuroraDBClusterStorage",
 * //         },
 * //       ],
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //       currentPerformanceRisk: "VeryLow" || "Low" || "Medium" || "High",
 * //       effectiveRecommendationPreferences: { // EffectiveRecommendationPreferences
 * //         cpuVendorArchitectures: [ // CpuVendorArchitectures
 * //           "AWS_ARM64" || "CURRENT",
 * //         ],
 * //         enhancedInfrastructureMetrics: "Active" || "Inactive",
 * //         inferredWorkloadTypes: "Active" || "Inactive",
 * //         externalMetricsPreference: { // ExternalMetricsPreference
 * //           source: "Datadog" || "Dynatrace" || "NewRelic" || "Instana",
 * //         },
 * //         lookBackPeriod: "DAYS_14" || "DAYS_32" || "DAYS_93",
 * //         utilizationPreferences: [ // UtilizationPreferences
 * //           { // UtilizationPreference
 * //             metricName: "CpuUtilization" || "MemoryUtilization",
 * //             metricParameters: { // CustomizableMetricParameters
 * //               threshold: "P90" || "P95" || "P99_5",
 * //               headroom: "PERCENT_30" || "PERCENT_20" || "PERCENT_10" || "PERCENT_0",
 * //             },
 * //           },
 * //         ],
 * //         preferredResources: [ // EffectivePreferredResources
 * //           { // EffectivePreferredResource
 * //             name: "Ec2InstanceTypes",
 * //             includeList: [ // PreferredResourceValues
 * //               "STRING_VALUE",
 * //             ],
 * //             effectiveIncludeList: [
 * //               "STRING_VALUE",
 * //             ],
 * //             excludeList: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         savingsEstimationMode: { // InstanceSavingsEstimationMode
 * //           source: "PublicPricing" || "CostExplorerRightsizing" || "CostOptimizationHub",
 * //         },
 * //       },
 * //       inferredWorkloadTypes: [ // InferredWorkloadTypes
 * //         "AmazonEmr" || "ApacheCassandra" || "ApacheHadoop" || "Memcached" || "Nginx" || "PostgreSql" || "Redis" || "Kafka" || "SQLServer",
 * //       ],
 * //       instanceState: "pending" || "running" || "shutting-down" || "terminated" || "stopping" || "stopped",
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       externalMetricStatus: { // ExternalMetricStatus
 * //         statusCode: "NO_EXTERNAL_METRIC_SET" || "INTEGRATION_SUCCESS" || "DATADOG_INTEGRATION_ERROR" || "DYNATRACE_INTEGRATION_ERROR" || "NEWRELIC_INTEGRATION_ERROR" || "INSTANA_INTEGRATION_ERROR" || "INSUFFICIENT_DATADOG_METRICS" || "INSUFFICIENT_DYNATRACE_METRICS" || "INSUFFICIENT_NEWRELIC_METRICS" || "INSUFFICIENT_INSTANA_METRICS",
 * //         statusReason: "STRING_VALUE",
 * //       },
 * //       currentInstanceGpuInfo: {
 * //         gpus: [
 * //           {
 * //             gpuCount: Number("int"),
 * //             gpuMemorySizeInMiB: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       idle: "True" || "False",
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
 * @param GetEC2InstanceRecommendationsCommandInput - {@link GetEC2InstanceRecommendationsCommandInput}
 * @returns {@link GetEC2InstanceRecommendationsCommandOutput}
 * @see {@link GetEC2InstanceRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetEC2InstanceRecommendationsCommandOutput} for command's `response` shape.
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
export class GetEC2InstanceRecommendationsCommand extends $Command
  .classBuilder<
    GetEC2InstanceRecommendationsCommandInput,
    GetEC2InstanceRecommendationsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "GetEC2InstanceRecommendations", {})
  .n("ComputeOptimizerClient", "GetEC2InstanceRecommendationsCommand")
  .sc(GetEC2InstanceRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEC2InstanceRecommendationsRequest;
      output: GetEC2InstanceRecommendationsResponse;
    };
    sdk: {
      input: GetEC2InstanceRecommendationsCommandInput;
      output: GetEC2InstanceRecommendationsCommandOutput;
    };
  };
}
