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
import { GetLambdaFunctionRecommendationsRequest, GetLambdaFunctionRecommendationsResponse } from "../models/models_0";
import {
  de_GetLambdaFunctionRecommendationsCommand,
  se_GetLambdaFunctionRecommendationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLambdaFunctionRecommendationsCommand}.
 */
export interface GetLambdaFunctionRecommendationsCommandInput extends GetLambdaFunctionRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetLambdaFunctionRecommendationsCommand}.
 */
export interface GetLambdaFunctionRecommendationsCommandOutput
  extends GetLambdaFunctionRecommendationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns Lambda function recommendations.</p>
 *          <p>Compute Optimizer generates recommendations for functions that meet a specific set
 *             of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>Compute Optimizer User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetLambdaFunctionRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetLambdaFunctionRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetLambdaFunctionRecommendationsRequest
 *   functionArns: [ // FunctionArns
 *     "STRING_VALUE",
 *   ],
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
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetLambdaFunctionRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetLambdaFunctionRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   lambdaFunctionRecommendations: [ // LambdaFunctionRecommendations
 * //     { // LambdaFunctionRecommendation
 * //       functionArn: "STRING_VALUE",
 * //       functionVersion: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       currentMemorySize: Number("int"),
 * //       numberOfInvocations: Number("long"),
 * //       utilizationMetrics: [ // LambdaFunctionUtilizationMetrics
 * //         { // LambdaFunctionUtilizationMetric
 * //           name: "Duration" || "Memory",
 * //           statistic: "Maximum" || "Average",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       lookbackPeriodInDays: Number("double"),
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //       finding: "Optimized" || "NotOptimized" || "Unavailable",
 * //       findingReasonCodes: [ // LambdaFunctionRecommendationFindingReasonCodes
 * //         "MemoryOverprovisioned" || "MemoryUnderprovisioned" || "InsufficientData" || "Inconclusive",
 * //       ],
 * //       memorySizeRecommendationOptions: [ // LambdaFunctionMemoryRecommendationOptions
 * //         { // LambdaFunctionMemoryRecommendationOption
 * //           rank: Number("int"),
 * //           memorySize: Number("int"),
 * //           projectedUtilizationMetrics: [ // LambdaFunctionMemoryProjectedMetrics
 * //             { // LambdaFunctionMemoryProjectedMetric
 * //               name: "Duration",
 * //               statistic: "LowerBound" || "UpperBound" || "Expected",
 * //               value: Number("double"),
 * //             },
 * //           ],
 * //           savingsOpportunity: { // SavingsOpportunity
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       currentPerformanceRisk: "VeryLow" || "Low" || "Medium" || "High",
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLambdaFunctionRecommendationsCommandInput - {@link GetLambdaFunctionRecommendationsCommandInput}
 * @returns {@link GetLambdaFunctionRecommendationsCommandOutput}
 * @see {@link GetLambdaFunctionRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetLambdaFunctionRecommendationsCommandOutput} for command's `response` shape.
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
export class GetLambdaFunctionRecommendationsCommand extends $Command<
  GetLambdaFunctionRecommendationsCommandInput,
  GetLambdaFunctionRecommendationsCommandOutput,
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
  constructor(readonly input: GetLambdaFunctionRecommendationsCommandInput) {
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
  ): Handler<GetLambdaFunctionRecommendationsCommandInput, GetLambdaFunctionRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLambdaFunctionRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetLambdaFunctionRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ComputeOptimizerService",
        operation: "GetLambdaFunctionRecommendations",
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
    input: GetLambdaFunctionRecommendationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetLambdaFunctionRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLambdaFunctionRecommendationsCommandOutput> {
    return de_GetLambdaFunctionRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
