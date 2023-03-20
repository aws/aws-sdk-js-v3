// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeFlywheelIterationRequest, DescribeFlywheelIterationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFlywheelIterationCommand,
  serializeAws_json1_1DescribeFlywheelIterationCommand,
} from "../protocols/Aws_json1_1";

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
 * const command = new DescribeFlywheelIterationCommand(input);
 * const response = await client.send(command);
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
    return serializeAws_json1_1DescribeFlywheelIterationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFlywheelIterationCommandOutput> {
    return deserializeAws_json1_1DescribeFlywheelIterationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
