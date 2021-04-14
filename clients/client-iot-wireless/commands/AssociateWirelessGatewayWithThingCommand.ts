import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  AssociateWirelessGatewayWithThingRequest,
  AssociateWirelessGatewayWithThingResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand,
  serializeAws_restJson1AssociateWirelessGatewayWithThingCommand,
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

export type AssociateWirelessGatewayWithThingCommandInput = AssociateWirelessGatewayWithThingRequest;
export type AssociateWirelessGatewayWithThingCommandOutput = AssociateWirelessGatewayWithThingResponse &
  __MetadataBearer;

/**
 * <p>Associates a wireless gateway with a thing.</p>
 */
export class AssociateWirelessGatewayWithThingCommand extends $Command<
  AssociateWirelessGatewayWithThingCommandInput,
  AssociateWirelessGatewayWithThingCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateWirelessGatewayWithThingCommandInput) {
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
  ): Handler<AssociateWirelessGatewayWithThingCommandInput, AssociateWirelessGatewayWithThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "AssociateWirelessGatewayWithThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateWirelessGatewayWithThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateWirelessGatewayWithThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateWirelessGatewayWithThingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateWirelessGatewayWithThingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateWirelessGatewayWithThingCommandOutput> {
    return deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
