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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeFlywheelIterationRequest, DescribeFlywheelIterationResponse } from "../models/models_0";
import { de_DescribeFlywheelIterationCommand, se_DescribeFlywheelIterationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlywheelIterationCommand}.
 */
export interface DescribeFlywheelIterationCommandInput extends DescribeFlywheelIterationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlywheelIterationCommand}.
 */
export interface DescribeFlywheelIterationCommandOutput extends DescribeFlywheelIterationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve the configuration properties of a flywheel iteration.
 *       For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeFlywheelIterationCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeFlywheelIterationCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DescribeFlywheelIterationRequest
 *   FlywheelArn: "STRING_VALUE", // required
 *   FlywheelIterationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFlywheelIterationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlywheelIterationResponse
 * //   FlywheelIterationProperties: { // FlywheelIterationProperties
 * //     FlywheelArn: "STRING_VALUE",
 * //     FlywheelIterationId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Status: "TRAINING" || "EVALUATING" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //     Message: "STRING_VALUE",
 * //     EvaluatedModelArn: "STRING_VALUE",
 * //     EvaluatedModelMetrics: { // FlywheelModelEvaluationMetrics
 * //       AverageF1Score: Number("double"),
 * //       AveragePrecision: Number("double"),
 * //       AverageRecall: Number("double"),
 * //       AverageAccuracy: Number("double"),
 * //     },
 * //     TrainedModelArn: "STRING_VALUE",
 * //     TrainedModelMetrics: {
 * //       AverageF1Score: Number("double"),
 * //       AveragePrecision: Number("double"),
 * //       AverageRecall: Number("double"),
 * //       AverageAccuracy: Number("double"),
 * //     },
 * //     EvaluationManifestS3Prefix: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFlywheelIterationCommandInput - {@link DescribeFlywheelIterationCommandInput}
 * @returns {@link DescribeFlywheelIterationCommandOutput}
 * @see {@link DescribeFlywheelIterationCommandInput} for command's `input` shape.
 * @see {@link DescribeFlywheelIterationCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class DescribeFlywheelIterationCommand extends $Command<
  DescribeFlywheelIterationCommandInput,
  DescribeFlywheelIterationCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: DescribeFlywheelIterationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFlywheelIterationCommandInput, DescribeFlywheelIterationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFlywheelIterationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DescribeFlywheelIterationCommand";
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
  private serialize(input: DescribeFlywheelIterationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFlywheelIterationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFlywheelIterationCommandOutput> {
    return de_DescribeFlywheelIterationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
