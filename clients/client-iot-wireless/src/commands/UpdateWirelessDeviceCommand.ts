import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateWirelessDeviceRequest, UpdateWirelessDeviceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateWirelessDeviceCommand,
  serializeAws_restJson1UpdateWirelessDeviceCommand,
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

export interface UpdateWirelessDeviceCommandInput extends UpdateWirelessDeviceRequest {}
export interface UpdateWirelessDeviceCommandOutput extends UpdateWirelessDeviceResponse, __MetadataBearer {}

/**
 * <p>Updates properties of a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new UpdateWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateWirelessDeviceCommand extends $Command<
  UpdateWirelessDeviceCommandInput,
  UpdateWirelessDeviceCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWirelessDeviceCommandInput) {
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
  ): Handler<UpdateWirelessDeviceCommandInput, UpdateWirelessDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateWirelessDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWirelessDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWirelessDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWirelessDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateWirelessDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWirelessDeviceCommandOutput> {
    return deserializeAws_restJson1UpdateWirelessDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
