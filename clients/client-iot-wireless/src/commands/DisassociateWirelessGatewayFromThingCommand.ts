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
  DisassociateWirelessGatewayFromThingRequest,
  DisassociateWirelessGatewayFromThingRequestFilterSensitiveLog,
  DisassociateWirelessGatewayFromThingResponse,
  DisassociateWirelessGatewayFromThingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand,
  serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateWirelessGatewayFromThingCommandInput extends DisassociateWirelessGatewayFromThingRequest {}
export interface DisassociateWirelessGatewayFromThingCommandOutput
  extends DisassociateWirelessGatewayFromThingResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a wireless gateway from its currently associated thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessGatewayFromThingCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessGatewayFromThingCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new DisassociateWirelessGatewayFromThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWirelessGatewayFromThingCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessGatewayFromThingCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class DisassociateWirelessGatewayFromThingCommand extends $Command<
  DisassociateWirelessGatewayFromThingCommandInput,
  DisassociateWirelessGatewayFromThingCommandOutput,
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

  constructor(readonly input: DisassociateWirelessGatewayFromThingCommandInput) {
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
  ): Handler<DisassociateWirelessGatewayFromThingCommandInput, DisassociateWirelessGatewayFromThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateWirelessGatewayFromThingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DisassociateWirelessGatewayFromThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateWirelessGatewayFromThingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateWirelessGatewayFromThingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateWirelessGatewayFromThingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateWirelessGatewayFromThingCommandOutput> {
    return deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
