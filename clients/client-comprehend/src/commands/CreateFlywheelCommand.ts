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
  CreateFlywheelRequest,
  CreateFlywheelRequestFilterSensitiveLog,
  CreateFlywheelResponse,
  CreateFlywheelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateFlywheelCommand,
  serializeAws_json1_1CreateFlywheelCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link CreateFlywheelCommand}.
 */
export interface CreateFlywheelCommandInput extends CreateFlywheelRequest {}
/**
 * The output of {@link CreateFlywheelCommand}.
 */
export interface CreateFlywheelCommandOutput extends CreateFlywheelResponse, __MetadataBearer {}

/**
 * <p>A flywheel is an AWS resource that orchestrates the ongoing training of a model for custom classification
 *       or custom entity recognition. You can create a flywheel to start with an existing trained model, or
 *       Comprehend can create and train a new model.</p>
 *          <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training
 *       data and test data for all versions of the model.</p>
 *          <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's
 *       training data and test data into the flywheel's data lake.</p>
 *          <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data)
 *       when you create the flywheel.</p>
 *          <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, CreateFlywheelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, CreateFlywheelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new CreateFlywheelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFlywheelCommandInput} for command's `input` shape.
 * @see {@link CreateFlywheelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class CreateFlywheelCommand extends $Command<
  CreateFlywheelCommandInput,
  CreateFlywheelCommandOutput,
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

  constructor(readonly input: CreateFlywheelCommandInput) {
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
  ): Handler<CreateFlywheelCommandInput, CreateFlywheelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFlywheelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "CreateFlywheelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFlywheelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFlywheelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFlywheelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFlywheelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFlywheelCommandOutput> {
    return deserializeAws_json1_1CreateFlywheelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
