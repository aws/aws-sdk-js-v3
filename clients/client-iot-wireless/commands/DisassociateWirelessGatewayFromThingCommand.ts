import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DisassociateWirelessGatewayFromThingRequest,
  DisassociateWirelessGatewayFromThingResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand,
  serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand,
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

export type DisassociateWirelessGatewayFromThingCommandInput = DisassociateWirelessGatewayFromThingRequest;
export type DisassociateWirelessGatewayFromThingCommandOutput = DisassociateWirelessGatewayFromThingResponse &
  __MetadataBearer;

/**
 * <p>Disassociates a wireless gateway from its currently associated thing.</p>
 */
export class DisassociateWirelessGatewayFromThingCommand extends $Command<
  DisassociateWirelessGatewayFromThingCommandInput,
  DisassociateWirelessGatewayFromThingCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DisassociateWirelessGatewayFromThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateWirelessGatewayFromThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateWirelessGatewayFromThingResponse.filterSensitiveLog,
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
