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
  GetAutoScalingGroupRecommendationsRequest,
  GetAutoScalingGroupRecommendationsResponse,
} from "../models/models_0";
import { GetAutoScalingGroupRecommendations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAutoScalingGroupRecommendationsCommand}.
 */
export interface GetAutoScalingGroupRecommendationsCommandInput extends GetAutoScalingGroupRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetAutoScalingGroupRecommendationsCommand}.
 */
export interface GetAutoScalingGroupRecommendationsCommandOutput
  extends GetAutoScalingGroupRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns Amazon EC2 Auto Scaling group recommendations.</p>
 *          <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that
 *             meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported
 *                 resources and requirements</a> in the <i>Compute Optimizer User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetAutoScalingGroupRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetAutoScalingGroupRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetAutoScalingGroupRecommendationsRequest
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   autoScalingGroupArns: [ // AutoScalingGroupArns
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
 *   recommendationPreferences: { // RecommendationPreferences
 *     cpuVendorArchitectures: [ // CpuVendorArchitectures
 *       "AWS_ARM64" || "CURRENT",
 *     ],
 *   },
 * };
 * const command = new GetAutoScalingGroupRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetAutoScalingGroupRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   autoScalingGroupRecommendations: [ // AutoScalingGroupRecommendations
 * //     { // AutoScalingGroupRecommendation
 * //       accountId: "STRING_VALUE",
 * //       autoScalingGroupArn: "STRING_VALUE",
 * //       autoScalingGroupName: "STRING_VALUE",
 * //       finding: "Underprovisioned" || "Overprovisioned" || "Optimized" || "NotOptimized",
 * //       utilizationMetrics: [ // UtilizationMetrics
 * //         { // UtilizationMetric
 * //           name: "Cpu" || "Memory" || "EBS_READ_OPS_PER_SECOND" || "EBS_WRITE_OPS_PER_SECOND" || "EBS_READ_BYTES_PER_SECOND" || "EBS_WRITE_BYTES_PER_SECOND" || "DISK_READ_OPS_PER_SECOND" || "DISK_WRITE_OPS_PER_SECOND" || "DISK_READ_BYTES_PER_SECOND" || "DISK_WRITE_BYTES_PER_SECOND" || "NETWORK_IN_BYTES_PER_SECOND" || "NETWORK_OUT_BYTES_PER_SECOND" || "NETWORK_PACKETS_IN_PER_SECOND" || "NETWORK_PACKETS_OUT_PER_SECOND" || "GPU_PERCENTAGE" || "GPU_MEMORY_PERCENTAGE",
 * //           statistic: "Maximum" || "Average",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       lookBackPeriodInDays: Number("double"),
 * //       currentConfiguration: { // AutoScalingGroupConfiguration
 * //         desiredCapacity: Number("int"),
 * //         minSize: Number("int"),
 * //         maxSize: Number("int"),
 * //         instanceType: "STRING_VALUE",
 * //         allocationStrategy: "Prioritized" || "LowestPrice",
 * //         estimatedInstanceHourReductionPercentage: Number("double"),
 * //         type: "SingleInstanceType" || "MixedInstanceTypes",
 * //         mixedInstanceTypes: [ // MixedInstanceTypes
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       currentInstanceGpuInfo: { // GpuInfo
 * //         gpus: [ // Gpus
 * //           { // Gpu
 * //             gpuCount: Number("int"),
 * //             gpuMemorySizeInMiB: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       recommendationOptions: [ // AutoScalingGroupRecommendationOptions
 * //         { // AutoScalingGroupRecommendationOption
 * //           configuration: {
 * //             desiredCapacity: Number("int"),
 * //             minSize: Number("int"),
 * //             maxSize: Number("int"),
 * //             instanceType: "STRING_VALUE",
 * //             allocationStrategy: "Prioritized" || "LowestPrice",
 * //             estimatedInstanceHourReductionPercentage: Number("double"),
 * //             type: "SingleInstanceType" || "MixedInstanceTypes",
 * //             mixedInstanceTypes: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           instanceGpuInfo: {
 * //             gpus: [
 * //               {
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
 * //           performanceRisk: Number("double"),
 * //           rank: Number("int"),
 * //           savingsOpportunity: { // SavingsOpportunity
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //           savingsOpportunityAfterDiscounts: { // AutoScalingGroupSavingsOpportunityAfterDiscounts
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // AutoScalingGroupEstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //           migrationEffort: "VeryLow" || "Low" || "Medium" || "High",
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
 * @param GetAutoScalingGroupRecommendationsCommandInput - {@link GetAutoScalingGroupRecommendationsCommandInput}
 * @returns {@link GetAutoScalingGroupRecommendationsCommandOutput}
 * @see {@link GetAutoScalingGroupRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetAutoScalingGroupRecommendationsCommandOutput} for command's `response` shape.
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
export class GetAutoScalingGroupRecommendationsCommand extends $Command
  .classBuilder<
    GetAutoScalingGroupRecommendationsCommandInput,
    GetAutoScalingGroupRecommendationsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "GetAutoScalingGroupRecommendations", {})
  .n("ComputeOptimizerClient", "GetAutoScalingGroupRecommendationsCommand")
  .sc(GetAutoScalingGroupRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutoScalingGroupRecommendationsRequest;
      output: GetAutoScalingGroupRecommendationsResponse;
    };
    sdk: {
      input: GetAutoScalingGroupRecommendationsCommandInput;
      output: GetAutoScalingGroupRecommendationsCommandOutput;
    };
  };
}
