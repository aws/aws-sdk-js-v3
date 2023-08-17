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
} from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import {
  GetECSServiceRecommendationProjectedMetricsRequest,
  GetECSServiceRecommendationProjectedMetricsResponse,
} from "../models/models_0";
import {
  de_GetECSServiceRecommendationProjectedMetricsCommand,
  se_GetECSServiceRecommendationProjectedMetricsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetECSServiceRecommendationProjectedMetricsCommand}.
 */
export interface GetECSServiceRecommendationProjectedMetricsCommandInput
  extends GetECSServiceRecommendationProjectedMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetECSServiceRecommendationProjectedMetricsCommand}.
 */
export interface GetECSServiceRecommendationProjectedMetricsCommandOutput
  extends GetECSServiceRecommendationProjectedMetricsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             Returns the projected metrics of Amazon ECS service recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetECSServiceRecommendationProjectedMetricsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetECSServiceRecommendationProjectedMetricsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetECSServiceRecommendationProjectedMetricsRequest
 *   serviceArn: "STRING_VALUE", // required
 *   stat: "Maximum" || "Average", // required
 *   period: Number("int"), // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetECSServiceRecommendationProjectedMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetECSServiceRecommendationProjectedMetricsResponse
 * //   recommendedOptionProjectedMetrics: [ // ECSServiceRecommendedOptionProjectedMetrics
 * //     { // ECSServiceRecommendedOptionProjectedMetric
 * //       recommendedCpuUnits: Number("int"),
 * //       recommendedMemorySize: Number("int"),
 * //       projectedMetrics: [ // ECSServiceProjectedMetrics
 * //         { // ECSServiceProjectedMetric
 * //           name: "Cpu" || "Memory",
 * //           timestamps: [ // Timestamps
 * //             new Date("TIMESTAMP"),
 * //           ],
 * //           upperBoundValues: [ // MetricValues
 * //             Number("double"),
 * //           ],
 * //           lowerBoundValues: [
 * //             Number("double"),
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetECSServiceRecommendationProjectedMetricsCommandInput - {@link GetECSServiceRecommendationProjectedMetricsCommandInput}
 * @returns {@link GetECSServiceRecommendationProjectedMetricsCommandOutput}
 * @see {@link GetECSServiceRecommendationProjectedMetricsCommandInput} for command's `input` shape.
 * @see {@link GetECSServiceRecommendationProjectedMetricsCommandOutput} for command's `response` shape.
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
export class GetECSServiceRecommendationProjectedMetricsCommand extends $Command<
  GetECSServiceRecommendationProjectedMetricsCommandInput,
  GetECSServiceRecommendationProjectedMetricsCommandOutput,
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
  constructor(readonly input: GetECSServiceRecommendationProjectedMetricsCommandInput) {
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
  ): Handler<
    GetECSServiceRecommendationProjectedMetricsCommandInput,
    GetECSServiceRecommendationProjectedMetricsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetECSServiceRecommendationProjectedMetricsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetECSServiceRecommendationProjectedMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: GetECSServiceRecommendationProjectedMetricsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetECSServiceRecommendationProjectedMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetECSServiceRecommendationProjectedMetricsCommandOutput> {
    return de_GetECSServiceRecommendationProjectedMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
