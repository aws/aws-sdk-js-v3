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
import {
  StartFlywheelIterationRequest,
  StartFlywheelIterationRequestFilterSensitiveLog,
  StartFlywheelIterationResponse,
  StartFlywheelIterationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartFlywheelIterationCommand,
  serializeAws_json1_1StartFlywheelIterationCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link StartFlywheelIterationCommand}.
 */
export interface StartFlywheelIterationCommandInput extends StartFlywheelIterationRequest {}
/**
 * The output of {@link StartFlywheelIterationCommand}.
 */
export interface StartFlywheelIterationCommandOutput extends StartFlywheelIterationResponse, __MetadataBearer {}

/**
 * <p>Start the flywheel iteration.This operation uses any new datasets to train a new model version.
 *       For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartFlywheelIterationCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartFlywheelIterationCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StartFlywheelIterationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFlywheelIterationCommandInput} for command's `input` shape.
 * @see {@link StartFlywheelIterationCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class StartFlywheelIterationCommand extends $Command<
  StartFlywheelIterationCommandInput,
  StartFlywheelIterationCommandOutput,
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

  constructor(readonly input: StartFlywheelIterationCommandInput) {
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
  ): Handler<StartFlywheelIterationCommandInput, StartFlywheelIterationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFlywheelIterationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StartFlywheelIterationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFlywheelIterationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartFlywheelIterationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartFlywheelIterationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartFlywheelIterationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFlywheelIterationCommandOutput> {
    return deserializeAws_json1_1StartFlywheelIterationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
