// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetEC2InstanceRecommendationsRequest, GetEC2InstanceRecommendationsResponse } from "../models/models_0";
import {
  de_GetEC2InstanceRecommendationsCommand,
  se_GetEC2InstanceRecommendationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * //           migrationEffort: "VeryLow" || "Low" || "Medium" || "High",
 * //           instanceGpuInfo: { // GpuInfo
 * //             gpus: [ // Gpus
 * //               { // Gpu
 * //                 gpuCount: Number("int"),
 * //                 gpuMemorySizeInMiB: Number("int"),
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       recommendationSources: [ // RecommendationSources
 * //         { // RecommendationSource
 * //           recommendationSourceArn: "STRING_VALUE",
 * //           recommendationSourceType: "Ec2Instance" || "AutoScalingGroup" || "EbsVolume" || "LambdaFunction" || "EcsService" || "License",
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
 */
export class GetEC2InstanceRecommendationsCommand extends $Command<
  GetEC2InstanceRecommendationsCommandInput,
  GetEC2InstanceRecommendationsCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetEC2InstanceRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEC2InstanceRecommendationsCommandInput, GetEC2InstanceRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEC2InstanceRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetEC2InstanceRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ComputeOptimizerService",
        operation: "GetEC2InstanceRecommendations",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetEC2InstanceRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEC2InstanceRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEC2InstanceRecommendationsCommandOutput> {
    return de_GetEC2InstanceRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
