import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SetLoggingOptionsRequest } from "../models/models_2";
import {
  deserializeAws_restJson1SetLoggingOptionsCommand,
  serializeAws_restJson1SetLoggingOptionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface SetLoggingOptionsCommandInput extends SetLoggingOptionsRequest {}
export interface SetLoggingOptionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the logging options.</p>
 *          <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code>
 *          instead.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetLoggingOptions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetLoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetLoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SetLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link SetLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SetLoggingOptionsCommand extends $Command<
  SetLoggingOptionsCommandInput,
  SetLoggingOptionsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetLoggingOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetLoggingOptionsCommandInput, SetLoggingOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "SetLoggingOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetLoggingOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetLoggingOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SetLoggingOptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetLoggingOptionsCommandOutput> {
    return deserializeAws_restJson1SetLoggingOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
