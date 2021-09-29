import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { DescribeDeviceRequest, DescribeDeviceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDeviceCommand,
  serializeAws_restJson1DescribeDeviceCommand,
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

export interface DescribeDeviceCommandInput extends DescribeDeviceRequest {}
export interface DescribeDeviceCommandOutput extends DescribeDeviceResponse, __MetadataBearer {}

/**
 * <p>Given a device ID, returns a DescribeDeviceResponse object describing the
 *  details of the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, DescribeDeviceCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, DescribeDeviceCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new DescribeDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDeviceCommand extends $Command<
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDeviceCommandInput) {
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
  ): Handler<DescribeDeviceCommandInput, DescribeDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "DescribeDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDeviceCommandOutput> {
    return deserializeAws_restJson1DescribeDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
