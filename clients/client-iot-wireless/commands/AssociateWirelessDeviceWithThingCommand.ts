import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { AssociateWirelessDeviceWithThingRequest, AssociateWirelessDeviceWithThingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand,
  serializeAws_restJson1AssociateWirelessDeviceWithThingCommand,
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

export type AssociateWirelessDeviceWithThingCommandInput = AssociateWirelessDeviceWithThingRequest;
export type AssociateWirelessDeviceWithThingCommandOutput = AssociateWirelessDeviceWithThingResponse & __MetadataBearer;

/**
 * <p>Associates a wireless device with a thing.</p>
 */
export class AssociateWirelessDeviceWithThingCommand extends $Command<
  AssociateWirelessDeviceWithThingCommandInput,
  AssociateWirelessDeviceWithThingCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateWirelessDeviceWithThingCommandInput) {
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
  ): Handler<AssociateWirelessDeviceWithThingCommandInput, AssociateWirelessDeviceWithThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "AssociateWirelessDeviceWithThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateWirelessDeviceWithThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateWirelessDeviceWithThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateWirelessDeviceWithThingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateWirelessDeviceWithThingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateWirelessDeviceWithThingCommandOutput> {
    return deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
