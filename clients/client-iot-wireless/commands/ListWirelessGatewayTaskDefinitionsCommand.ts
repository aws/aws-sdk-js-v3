import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  ListWirelessGatewayTaskDefinitionsRequest,
  ListWirelessGatewayTaskDefinitionsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand,
  serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand,
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

export type ListWirelessGatewayTaskDefinitionsCommandInput = ListWirelessGatewayTaskDefinitionsRequest;
export type ListWirelessGatewayTaskDefinitionsCommandOutput = ListWirelessGatewayTaskDefinitionsResponse &
  __MetadataBearer;

/**
 * <p>List the wireless gateway tasks definitions registered to your AWS account.</p>
 */
export class ListWirelessGatewayTaskDefinitionsCommand extends $Command<
  ListWirelessGatewayTaskDefinitionsCommandInput,
  ListWirelessGatewayTaskDefinitionsCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWirelessGatewayTaskDefinitionsCommandInput) {
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
  ): Handler<ListWirelessGatewayTaskDefinitionsCommandInput, ListWirelessGatewayTaskDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListWirelessGatewayTaskDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWirelessGatewayTaskDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWirelessGatewayTaskDefinitionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListWirelessGatewayTaskDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput> {
    return deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
