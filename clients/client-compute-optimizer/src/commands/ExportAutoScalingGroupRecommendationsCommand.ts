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
export { __MetadataBearer, $Command };
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
 * @public
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
 *     "AccountId" || "AutoScalingGroupArn" || "AutoScalingGroupName" || "Finding" || "UtilizationMetricsCpuMaximum" || "UtilizationMetricsMemoryMaximum" || "UtilizationMetricsEbsReadOpsPerSecondMaximum" || "UtilizationMetricsEbsWriteOpsPerSecondMaximum" || "UtilizationMetricsEbsReadBytesPerSecondMaximum" || "UtilizationMetricsEbsWriteBytesPerSecondMaximum" || "UtilizationMetricsDiskReadOpsPerSecondMaximum" || "UtilizationMetricsDiskWriteOpsPerSecondMaximum" || "UtilizationMetricsDiskReadBytesPerSecondMaximum" || "UtilizationMetricsDiskWriteBytesPerSecondMaximum" || "UtilizationMetricsNetworkInBytesPerSecondMaximum" || "UtilizationMetricsNetworkOutBytesPerSecondMaximum" || "UtilizationMetricsNetworkPacketsInPerSecondMaximum" || "UtilizationMetricsNetworkPacketsOutPerSecondMaximum" || "LookbackPeriodInDays" || "CurrentConfigurationInstanceType" || "CurrentConfigurationDesiredCapacity" || "CurrentConfigurationMinSize" || "CurrentConfigurationMaxSize" || "CurrentOnDemandPrice" || "CurrentStandardOneYearNoUpfrontReservedPrice" || "CurrentStandardThreeYearNoUpfrontReservedPrice" || "CurrentVCpus" || "CurrentMemory" || "CurrentStorage" || "CurrentNetwork" || "RecommendationOptionsConfigurationInstanceType" || "RecommendationOptionsConfigurationDesiredCapacity" || "RecommendationOptionsConfigurationMinSize" || "RecommendationOptionsConfigurationMaxSize" || "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum" || "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum" || "RecommendationOptionsPerformanceRisk" || "RecommendationOptionsOnDemandPrice" || "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice" || "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice" || "RecommendationOptionsVcpus" || "RecommendationOptionsMemory" || "RecommendationOptionsStorage" || "RecommendationOptionsNetwork" || "LastRefreshTimestamp" || "CurrentPerformanceRisk" || "RecommendationOptionsSavingsOpportunityPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrency" || "RecommendationOptionsEstimatedMonthlySavingsValue" || "EffectiveRecommendationPreferencesCpuVendorArchitectures" || "EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics" || "EffectiveRecommendationPreferencesInferredWorkloadTypes" || "InferredWorkloadTypes" || "RecommendationOptionsMigrationEffort" || "CurrentInstanceGpuInfo" || "RecommendationOptionsInstanceGpuInfo" || "UtilizationMetricsGpuPercentageMaximum" || "UtilizationMetricsGpuMemoryPercentageMaximum" || "RecommendationOptionsProjectedUtilizationMetricsGpuPercentageMaximum" || "RecommendationOptionsProjectedUtilizationMetricsGpuMemoryPercentageMaximum",
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
 */
export class ExportAutoScalingGroupRecommendationsCommand extends $Command<
  ExportAutoScalingGroupRecommendationsCommandInput,
  ExportAutoScalingGroupRecommendationsCommandOutput,
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
  constructor(readonly input: ExportAutoScalingGroupRecommendationsCommandInput) {
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
  ): Handler<ExportAutoScalingGroupRecommendationsCommandInput, ExportAutoScalingGroupRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportAutoScalingGroupRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "ExportAutoScalingGroupRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ComputeOptimizerService",
        operation: "ExportAutoScalingGroupRecommendations",
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
  private serialize(
    input: ExportAutoScalingGroupRecommendationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ExportAutoScalingGroupRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportAutoScalingGroupRecommendationsCommandOutput> {
    return de_ExportAutoScalingGroupRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
