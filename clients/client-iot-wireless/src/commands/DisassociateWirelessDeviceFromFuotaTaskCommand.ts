// smithy-typescript generated code
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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DisassociateWirelessDeviceFromFuotaTaskRequest,
  DisassociateWirelessDeviceFromFuotaTaskResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommand,
  serializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateWirelessDeviceFromFuotaTaskCommandInput
  extends DisassociateWirelessDeviceFromFuotaTaskRequest {}
export interface DisassociateWirelessDeviceFromFuotaTaskCommandOutput
  extends DisassociateWirelessDeviceFromFuotaTaskResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a wireless device from a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessDeviceFromFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessDeviceFromFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DisassociateWirelessDeviceFromFuotaTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWirelessDeviceFromFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessDeviceFromFuotaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class DisassociateWirelessDeviceFromFuotaTaskCommand extends $Command<
  DisassociateWirelessDeviceFromFuotaTaskCommandInput,
  DisassociateWirelessDeviceFromFuotaTaskCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateWirelessDeviceFromFuotaTaskCommandInput) {
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
  ): Handler<
    DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    DisassociateWirelessDeviceFromFuotaTaskCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DisassociateWirelessDeviceFromFuotaTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateWirelessDeviceFromFuotaTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateWirelessDeviceFromFuotaTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateWirelessDeviceFromFuotaTaskCommandOutput> {
    return deserializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
