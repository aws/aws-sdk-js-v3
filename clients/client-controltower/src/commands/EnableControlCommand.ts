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

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import {
  EnableControlInput,
  EnableControlInputFilterSensitiveLog,
  EnableControlOutput,
  EnableControlOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1EnableControlCommand,
  serializeAws_restJson1EnableControlCommand,
} from "../protocols/Aws_restJson1";

export interface EnableControlCommandInput extends EnableControlInput {}
export interface EnableControlCommandOutput extends EnableControlOutput, __MetadataBearer {}

/**
 * <p>This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified
 *       organizational unit and the accounts it contains. The resources created will vary according to
 *       the control that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, EnableControlCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, EnableControlCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const command = new EnableControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableControlCommandInput} for command's `input` shape.
 * @see {@link EnableControlCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 */
export class EnableControlCommand extends $Command<
  EnableControlCommandInput,
  EnableControlCommandOutput,
  ControlTowerClientResolvedConfig
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

  constructor(readonly input: EnableControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ControlTowerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableControlCommandInput, EnableControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EnableControlCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ControlTowerClient";
    const commandName = "EnableControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableControlInputFilterSensitiveLog,
      outputFilterSensitiveLog: EnableControlOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableControlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableControlCommandOutput> {
    return deserializeAws_restJson1EnableControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
