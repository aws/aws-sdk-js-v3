import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { UpdateDeviceStateRequest, UpdateDeviceStateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDeviceStateCommand,
  serializeAws_restJson1UpdateDeviceStateCommand,
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

export interface UpdateDeviceStateCommandInput extends UpdateDeviceStateRequest {}
export interface UpdateDeviceStateCommandOutput extends UpdateDeviceStateResponse, __MetadataBearer {}

/**
 * <p>Using a Boolean value (true or false), this operation
 *  enables or disables the device given a device ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, UpdateDeviceStateCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, UpdateDeviceStateCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new UpdateDeviceStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceStateCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceStateCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDeviceStateCommand extends $Command<
  UpdateDeviceStateCommandInput,
  UpdateDeviceStateCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDeviceStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDeviceStateCommandInput, UpdateDeviceStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "UpdateDeviceStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDeviceStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDeviceStateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDeviceStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDeviceStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeviceStateCommandOutput> {
    return deserializeAws_restJson1UpdateDeviceStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
