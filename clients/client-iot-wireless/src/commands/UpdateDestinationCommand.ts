import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateDestinationRequest, UpdateDestinationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDestinationCommand,
  serializeAws_restJson1UpdateDestinationCommand,
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

export interface UpdateDestinationCommandInput extends UpdateDestinationRequest {}
export interface UpdateDestinationCommandOutput extends UpdateDestinationResponse, __MetadataBearer {}

/**
 * <p>Updates properties of a destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateDestinationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateDestinationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdateDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDestinationCommand extends $Command<
  UpdateDestinationCommandInput,
  UpdateDestinationCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDestinationCommandInput, UpdateDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDestinationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDestinationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDestinationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDestinationCommandOutput> {
    return deserializeAws_restJson1UpdateDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
