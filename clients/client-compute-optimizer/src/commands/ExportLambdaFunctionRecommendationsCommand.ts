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
  ExportLambdaFunctionRecommendationsRequest,
  ExportLambdaFunctionRecommendationsResponse,
} from "../models/models_0";
import {
  de_ExportLambdaFunctionRecommendationsCommand,
  se_ExportLambdaFunctionRecommendationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
export interface ExportLambdaFunctionRecommendationsCommandOutput
  extends ExportLambdaFunctionRecommendationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Exports optimization recommendations for Lambda functions.</p>
 *          <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User
 *             Guide</i>.</p>
 *          <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportLambdaFunctionRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportLambdaFunctionRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
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
 *     "AccountId" || "FunctionArn" || "FunctionVersion" || "Finding" || "FindingReasonCodes" || "NumberOfInvocations" || "UtilizationMetricsDurationMaximum" || "UtilizationMetricsDurationAverage" || "UtilizationMetricsMemoryMaximum" || "UtilizationMetricsMemoryAverage" || "LookbackPeriodInDays" || "CurrentConfigurationMemorySize" || "CurrentConfigurationTimeout" || "CurrentCostTotal" || "CurrentCostAverage" || "RecommendationOptionsConfigurationMemorySize" || "RecommendationOptionsCostLow" || "RecommendationOptionsCostHigh" || "RecommendationOptionsProjectedUtilizationMetricsDurationLowerBound" || "RecommendationOptionsProjectedUtilizationMetricsDurationUpperBound" || "RecommendationOptionsProjectedUtilizationMetricsDurationExpected" || "LastRefreshTimestamp" || "CurrentPerformanceRisk" || "RecommendationOptionsSavingsOpportunityPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrency" || "RecommendationOptionsEstimatedMonthlySavingsValue" || "Tags",
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
export class ExportLambdaFunctionRecommendationsCommand extends $Command<
  ExportLambdaFunctionRecommendationsCommandInput,
  ExportLambdaFunctionRecommendationsCommandOutput,
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
  constructor(readonly input: ExportLambdaFunctionRecommendationsCommandInput) {
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
  ): Handler<ExportLambdaFunctionRecommendationsCommandInput, ExportLambdaFunctionRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportLambdaFunctionRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "ExportLambdaFunctionRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ComputeOptimizerService",
        operation: "ExportLambdaFunctionRecommendations",
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
    input: ExportLambdaFunctionRecommendationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ExportLambdaFunctionRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportLambdaFunctionRecommendationsCommandOutput> {
    return de_ExportLambdaFunctionRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
