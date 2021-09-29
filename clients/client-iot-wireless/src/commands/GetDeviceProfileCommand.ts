import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetDeviceProfileRequest, GetDeviceProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDeviceProfileCommand,
  serializeAws_restJson1GetDeviceProfileCommand,
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

export interface GetDeviceProfileCommandInput extends GetDeviceProfileRequest {}
export interface GetDeviceProfileCommandOutput extends GetDeviceProfileResponse, __MetadataBearer {}

/**
 * <p>Gets information about a device profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetDeviceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetDeviceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetDeviceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeviceProfileCommandInput} for command's `input` shape.
 * @see {@link GetDeviceProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDeviceProfileCommand extends $Command<
  GetDeviceProfileCommandInput,
  GetDeviceProfileCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDeviceProfileCommandInput) {
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
  ): Handler<GetDeviceProfileCommandInput, GetDeviceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetDeviceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeviceProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDeviceProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDeviceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDeviceProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceProfileCommandOutput> {
    return deserializeAws_restJson1GetDeviceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
