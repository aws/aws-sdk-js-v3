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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DisassociateWirelessDeviceFromMulticastGroupRequest,
  DisassociateWirelessDeviceFromMulticastGroupRequestFilterSensitiveLog,
  DisassociateWirelessDeviceFromMulticastGroupResponse,
  DisassociateWirelessDeviceFromMulticastGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommand,
  serializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateWirelessDeviceFromMulticastGroupCommandInput
  extends DisassociateWirelessDeviceFromMulticastGroupRequest {}
export interface DisassociateWirelessDeviceFromMulticastGroupCommandOutput
  extends DisassociateWirelessDeviceFromMulticastGroupResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a wireless device from a multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessDeviceFromMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessDeviceFromMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DisassociateWirelessDeviceFromMulticastGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWirelessDeviceFromMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessDeviceFromMulticastGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class DisassociateWirelessDeviceFromMulticastGroupCommand extends $Command<
  DisassociateWirelessDeviceFromMulticastGroupCommandInput,
  DisassociateWirelessDeviceFromMulticastGroupCommandOutput,
  IoTWirelessClientResolvedConfig
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

  constructor(readonly input: DisassociateWirelessDeviceFromMulticastGroupCommandInput) {
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
    DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    DisassociateWirelessDeviceFromMulticastGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociateWirelessDeviceFromMulticastGroupCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DisassociateWirelessDeviceFromMulticastGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateWirelessDeviceFromMulticastGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateWirelessDeviceFromMulticastGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateWirelessDeviceFromMulticastGroupCommandOutput> {
    return deserializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
